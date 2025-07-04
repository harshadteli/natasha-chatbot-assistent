 // Matrix Effect
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const matrixChars = "01";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff00";
      ctx.font = fontSize + "px monospace";
      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    setInterval(drawMatrix, 33);
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Logic
    const form = document.getElementById('nameForm');
    const input = document.getElementById('username');
    const chatBox = document.getElementById('chatBox');
    const messageEl = document.getElementById('message');
    const spinner = document.getElementById('spinner');
    const typingSound = document.getElementById('typingSound');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const userName = input.value.trim();

      if (userName === '') {
        showAlert("Please enter your name");
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
        return;
      }

      form.style.display = 'none';
      chatBox.style.display = 'block';

      typeMessage(`Hello ${userName}, I'm Natasha... Initializing secure connection...`, () => {
        spinner.style.display = 'block';
        setTimeout(() => {
          window.location.href = "./PAGES/download.html?name=" + encodeURIComponent(userName);
         // window.location.href = "dashboard.html"; // Change to your page
        }, 4000);
      });
    });

    function typeMessage(text, callback) {
      messageEl.innerHTML = '';
      let i = 0;
      function typeChar() {
        if (i < text.length) {
          messageEl.textContent += text.charAt(i);
          typingSound.currentTime = 0;
          typingSound.play();
          i++;
          setTimeout(typeChar, 60);
        } else if (callback) {
          callback();
        }
      }
      typeChar();
    }

    function showAlert(message) {
      const alert = document.createElement('div');
      alert.className = 'alert';
      alert.textContent = message;
      document.body.appendChild(alert);
      setTimeout(() => alert.remove(), 3000);
    }