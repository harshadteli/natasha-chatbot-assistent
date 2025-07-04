const captchaText = document.getElementById('captcha-text');
const captchaInput = document.getElementById('captcha-input');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');
const audio = document.getElementById('audio');
const wrong = document.getElementById("wrong");

let captchaCode = generateCaptchaCode();

captchaText.textContent = captchaCode;

submitBtn.addEventListener('click', () => {
    const userInput = captchaInput.value.trim();
    if (userInput === captchaCode) {
        result.innerHTML = 'You are human!';
        audio.play();
        setTimeout(() => {
            window.location.href = './chatbot.html';
        }, audio.duration * 1000);
    } else {
        wrong.play();
        result.textContent = 'Wrong captcha! Try again.';
        captchaCode = generateCaptchaCode();
        captchaText.textContent = captchaCode;
        captchaInput.value = '';
    }
});

function generateCaptchaCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}