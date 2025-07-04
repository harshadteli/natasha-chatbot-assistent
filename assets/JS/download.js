 const query = new URLSearchParams(window.location.search);
    const user = query.get("name") || "User";

    const lines = [
      `Hello ${user}, I am Natasha.`,
      "Your advanced AI-powered chatbot.",
      "Version: v2.5.1",
      "Designed for seamless interaction, automation, and support.",
      "Preparing your experience..."
    ];

    const container = document.getElementById('container');
    const spinner = document.getElementById('spinner');
    const sound = document.getElementById('typingSound');

    let currentLine = 0;

    function typeLine(text, callback) {
      const lineElement = document.createElement('div');
      lineElement.className = 'line';
      container.insertBefore(lineElement, spinner);

      let charIndex = 0;
      function typeChar() {
        if (charIndex < text.length) {
          lineElement.textContent += text[charIndex];
          sound.currentTime = 0;
          sound.play();
          charIndex++;
          setTimeout(typeChar, 40);
        } else {
          if (callback) callback();
        }
      }
      typeChar();
    }

    function typeAllLines() {
      if (currentLine < lines.length) {
        typeLine(lines[currentLine], () => {
          currentLine++;
          setTimeout(typeAllLines, 300);
        });
      } else {
        spinner.style.display = 'block';
        setTimeout(() => {
          window.location.href = "./captcha.html"; // 🔁 redirect target
        }, 5000);
      }
    }

    typeAllLines();