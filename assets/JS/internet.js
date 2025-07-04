 // Inject styles ONLY for the popup
  const popupStyle = document.createElement("style");
  popupStyle.textContent = `
    #statusPopup {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #000;
      border: 2px solid #00ff00;
      color: #00ff00;
      padding: 12px 18px;
      z-index: 9999;
      font-family: 'Courier New', monospace;
      font-size: 16px;
      width: auto;
      max-width: 90%;
      display: none;
      box-shadow: 0 0 10px #00ff00;
      white-space: nowrap;
    }

    #statusPopup.offline {
      border-color: red;
      color: red;
      box-shadow: 0 0 10px red;
    }

    .typing-effect::after {
      content: '|';
      animation: blink 0.8s infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `;
  document.head.appendChild(popupStyle);

  // Reference to the popup
  const statusPopup = document.getElementById('statusPopup');

  // Function to display popup with typing effect
  function showTypingPopup(message, isOffline = false, redirectAfter = false) {
    statusPopup.classList.remove('offline');
    if (isOffline) statusPopup.classList.add('offline');

    statusPopup.style.display = 'block';
    statusPopup.innerHTML = '';
    let i = 0;

    const typeInterval = setInterval(() => {
      if (i < message.length) {
        statusPopup.innerHTML += message.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);

        setTimeout(() => {
          statusPopup.style.display = 'none';

          if (redirectAfter && isOffline) {
            showTypingPopup("Redirecting to safe mode...", true);
            setTimeout(() => {
              alert("You are offline. Please check your connection.");
              // location.href = 'offline.html'; // Optional: real redirect
            }, 2000);
          }
        }, 2000); // Hide popup after 2 seconds
      }
    }, 80);
  }

  // Check status on load
  function handleOnlineStatus() {
    if (navigator.onLine) {
      showTypingPopup(">> SYSTEM IS ONLINE <<");
    } else {
      showTypingPopup(">> SYSTEM IS OFFLINE <<", true, true);
    }
  }

  // Event listeners
  window.addEventListener('load', handleOnlineStatus);
  window.addEventListener('online', () => showTypingPopup(">> SYSTEM IS BACK ONLINE <<"));
  window.addEventListener('offline', () => showTypingPopup(">> SYSTEM IS OFFLINE <<", true, true));