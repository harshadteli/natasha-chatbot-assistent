let userName = '', isMuted = false;
const form = document.getElementById("chatForm");
const alertBox = document.getElementById("alertBox");
const chatContainer = document.getElementById("chat-container");
const chatLog = document.getElementById("chat-log");

const icons = {
  hello: 'https://cdn-icons-png.flaticon.com/512/876/876769.png',
  help: 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png',
  Developer: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  joke: 'https://cdn-icons-png.flaticon.com/512/742/742751.png',
  error: 'https://cdn-icons-png.flaticon.com/512/565/565547.png',
  bug: '<img src="Natasha.jpg" />'
};

const audios = {
  hello: document.getElementById('audio-hello'),
  help: document.getElementById('audio-help'),
  Developer: document.getElementById('audio-about'),
  joke: document.getElementById('audio-joke'),
  error: document.getElementById('audio-error'),
  report: document.getElementById("bugs"),
  onemore: document.getElementById("one-more"),
  not: document.getElementById("not"),
  tools: document.getElementById("tools"),
  run: document.getElementById("run"),
  webpage: document.getElementById("webpage"),
  portfolio: document.getElementById("portfolio"),
  languageofjoke: document.getElementById("languageofjoke"),
  marathijokefirst: document.getElementById("marathijoke1"),
  marathijokesecond: document.getElementById("marathijoke2"),
  shakysong: document.getElementById("shakysong"),
  motivate: document.getElementById("motivate"),
  timemotivate: document.getElementById("timemotivation"),
  intro: document.getElementById("intromassistent"),
  guide: document.getElementById("guide"),
  intromusicassistent: document.getElementById("intromusicassistent"),
  musicoptions: document.getElementById("musicoptions"),
  musicintro: document.getElementById("musicintro"),
  love1song: document.getElementById("love1song"),
  love2song: document.getElementById("love2song"),
  radhe: document.getElementById("radhe"),
  motivationsong: document.getElementById("motivation")
};

const botAvatar = document.getElementById("ok");
// const botAvatar = 'Natasha.jpg';
const userAvatar = 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png';

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameInput = document.getElementById("username").value.trim();
  if (nameInput) {
    userName = nameInput;
    alertBox.textContent = `⚠️ Hello ${userName}, Natasha is initializing...`;
    alertBox.style.display = 'block';
    setTimeout(() => {
      document.getElementById('name-section').style.display = 'none';
      chatContainer.style.display = 'flex';
    }, 1500);
  }


});

function createTypedMessage(avatar, text, type = 'bot', icon = null) {
  const message = document.createElement('div');
  message.classList.add('chat-message');

  const avatarImg = `<img class="chat-avatar ${type === 'bot' ? 'chatbot-avatar' : ''}" src="${avatar}" />`;
  const textBox = document.createElement('div');
  textBox.className = 'chat-text';

  message.innerHTML = avatarImg;
  message.appendChild(textBox);
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;

  let i = 0;
  const typing = setInterval(() => {
    if (i < text.length) {
      textBox.textContent += text.charAt(i);
      i++;
    } else {
      if (icon) {
        const img = document.createElement("img");
        img.src = icon;
        img.className = "command-icon";
        textBox.appendChild(img);
      }
      clearInterval(typing);
    }
  }, 30);
}

const previewImage = document.getElementById('previewImage');

function handleCommand(command) {
  let response = '', sound = 'error', icon = icons.error;

  switch (command) {
    case '🤹 virtual assistents':
      response = "Opening the Virtual Assistent Information from HarshTech";
      sound = 'run';
      window.open("https://harshadteli.github.io/virtual-assistent-info/");
      break;
    case 'virtual assistents':
      response = "Opening the Virtual Assistent Information from HarshTech";
      sound = 'run';
      window.open("https://harshadteli.github.io/virtual-assistent-info/");
      break;
    case '🤹 virtual assistent':
      response = "Opening the Virtual Assistent Information from HarshTech";
      sound = 'run';
      window.open("https://harshadteli.github.io/virtual-assistent-info/");
      break;
    case 'virtual assistent':
      response = "Opening the Virtual Assistent Information from HarshTech";
      sound = 'run';
      window.open("https://harshadteli.github.io/virtual-assistent-info/");
      break;
    case 'info':
      response = 'Ok, I am opening the list of web Tools that some tools is developed by the HarshTech and the other tools is searching from online web services by the Web Tools Assistent.';
      sound = 'run';
      window.open("info.txt");
      break;
    case '😊 hello':
      response = 'Hi there! How can I assist you? 😊';
      sound = 'hello'; icon = icons.hello;
      break;
    case 'hello natasha':
      response = 'Hi there! How can I assist you? 😊';
      sound = 'hello'; icon = icons.hello;
      break;
    case 'Hiii':
      response = 'Hi there! How can I assist you? 😊';
      sound = 'hello'; icon = icons.hello;
      break;
    case 'help':
      response = 'Please Go to the Commands List';
      sound = 'help';
      window.open("commands.html")
      break;
    case '👨‍💻 developer':
      response = 'Introducing about the Harshad Teli...';
      sound = 'Developer';
      break;
    case 'developer':
      response = 'Introducing about the Harshad Teli...';
      sound = 'Developer';
      break;
    case '📩 portfolio':
      window.open("https://harshadteli.github.io/harshadteliportfolio/");
      response = 'Portfolio opening....';
      sound = 'portfolio';
      break;
    case 'portfolio':
      window.open("https://harshadteli.github.io/harshadteliportfolio/");
      response = 'Portfolio opening....';
      sound = 'portfolio';
      break;
    case '🤣 joke':
      response = 'Please select your Language or type it as  "Marathi" or "English".';
      sound = 'languageofjoke';
      break;
    case 'jokes':
      response = 'ok,Jokes webpage is opening...';
      window.open("hhtsp://jokes.com");
      // here you can add the jokes website of the webpages
      break;
    case 'marathi':
      response = 'चिंगी: मस्त मोबाईल आहे, कुठून घेतलास? झंप्याः विकत नाही घेतला,मला धावण्याच्या शर्यतीत बक्षीस मिळाला आहे. चिंगी: कितीजण होते धावायला? झंप्याः मोबाईल दुकानाचा मालक, पोलिस आणि मी If you wan,t to listen  more joke the type marathi joke';
      sound = 'marathijokefirst';
      break;
    case 'marathi joke':
      response = 'मास्तर : मुलांनो मला सांगा राम वनवासाला कधी निघाले बंड्या : मास्तर राम वनवासाला 9:15 वाजता निघालेक मास्तर : 9:15 वाजता ते कसे... बंड्या : वनवास हा शब्द उलटा वाचा..... मास्तर शाळा सोडून वनवासाच्या तयारीत  If you want to listen more jokes then type marathi jokes otherwise type not';
      sound = 'marathijokesecond';
      break;


    case 'marathi jokes':
      response = 'Searching  the marathi jokes listed from Google..... ';
      sound = 'webpage';
      window.open("www.marathijokes.in");
      break;

    case 'jokes list':
      response = 'Searching  the English jokes listed from Google..... ';
      sound = 'webpage';
      window.open("github.com");
      break;


    case 'english':
      response = 'ok,I am taking a one joke and listing to you taking joke from online webs listed listening the joke Why did the computer go to the doctor? It had a virus! do you want to hear one another joke??? if you want to hear one another joke then type one more other wise type not';
      sound = 'joke'; icon = icons.joke;
      break;
    case 'one more':
      response = 'ok,Heres another one Joke,Why did the AI program go on a date? Because it was looking for a meaningful connection! 😂 if you want to hear the more jokes then type jokes list other wise not';
      sound = 'onemore'; icon = icons.joke;
      break;
    case '😍 trending song':
      response = 'yes, I am showing the most popular and trending song that "Shaky" is a 2025 Marathi-language song by Indian singer-songwriter Sanju Rathod, featuring actress Isha Malviya. Released as single on April 22, 2025, the song was written, composed, and performed by Rathod, with music production by G-Spark I am listening the some shorts of this song that have most popular on the social medias listening the song do you want to listen entire song Or listen the other songs by sanju rathod then type sanju rathod other wise type not';
      sound = 'shakysong';
      break;
    case 'trending song':
      response = 'yes, I am showing the most popular and trending song that "Shaky" is a 2025 Marathi-language song by Indian singer-songwriter Sanju Rathod, featuring actress Isha Malviya. Released as single on April 22, 2025, the song was written, composed, and performed by Rathod, with music production by G-Spark I am listening the some shorts of this song that have most popular on the social medias listening the song do you want to listen entire song Or listen the other songs by sanju rathod then type sanju rathod other wise type not';
      sound = 'shakysong';
      break;
    case 'sanju rathod':
      response = 'Ok, Searching the Sanju rathod Musics from Youtube.... ';
      sound = 'webpage';
      window.open("https://youtube.com/@sanjurathodsr?si=OUqaVpdNNlQ7x5jx");
      break;

    case 'music assistent':
      response = 'Your smart music companion powered by HarshTech! Hello I am music assistant for specially designed for Your smart music companion powered by HarshTech! Hello I am music assistant for specially designed to helps you quickly discover, shortlist, and preview the best songs from top music sources. Whether youre in the mood for trending hits, peaceful melodies, or energetic beats — just ask, and it’ll play a quick demo for you in seconds. here I am playing the quick demo most popular song that Finding Her Lyrics English Translation is a Hindi song sung by Kushagra. listening the song....if you want to listen more songs then type the "music" other wise type "not"';
      sound = 'intromusicassistent';
      break;
    case '🤖 music assistent':
      response = 'Your smart music companion powered by HarshTech! Hello I am music assistant for specially designed for Your smart music companion powered by HarshTech! Hello I am music assistant for specially designed to helps you quickly discover, shortlist, and preview the best songs from top music sources. Whether youre in the mood for trending hits, peaceful melodies, or energetic beats — just ask, and it’ll play a quick demo for you in seconds. here I am playing the quick demo most popular song that Finding Her Lyrics English Translation is a Hindi song sung by Kushagra. listening the song....if you want to listen more songs then type the "music" other wise type "not"';
      sound = 'intromusicassistent';
      break;
    case 'music':
      response = 'ok, I am showing some options for the  songs such as "love songs" ,"devotional songs" and "motivation songs" please enter one of these and I am listening the some favourable song that most famous in social medias way if you want to listen more songs then type "access" other wise type "not"';
      sound = 'musicintro';
      break;
    case 'love songs':
      response = 'Listiining song.........I am playing the song from Sanju Rathod of another song tittle as "Kali Bindi"';
      sound = 'love1song';
      break;
    case 'love song':
      response = 'Listiining song.........I am playing the song from Sanju Rathod of another song tittle as "Kali Bindi", If you want to listen one more song then type "love song more" other wise type "not"';
      sound = 'love1song';
      break;
    case 'love songs more':
      response = 'Listening the song.....If you want to listen more songs then type "access" other wise type "not"';
      sound = 'love2song';
      break;
    case 'love song more':
      response = 'Listening the song.....If you want to listen more songs then type "access" other wise type "not"';
      sound = 'love2song';
      break;
    case 'devotional songs':
      response = 'Ok, I am playing the song from say RADHE RADHE.....If you want to listen more songs then type "access" other wise type "not"';
      sound = 'radhe';
      break;
    case 'devotional song':
      response = 'Ok, I am playing the song from say RADHE RADHE.....If you want to listen more songs then type "access" other wise type "not"';
      sound = 'radhe';
      break;
    case 'motivation songs':
      response = 'Ok,Listining the song......If you want to listen more songs then type "access" other wise type "not"';
      sound = 'motivationsong';
      break;
    case 'motivation song':
      response = 'Ok,Listining the song......If you want to listen more songs then type "access" other wise type "not"';
      sound = 'motivationsong';
      break;


    case '🥇 motivation':
      response = 'I am Listening the most popular speech by Nitin Bangude Patil for you, Listening the speech....If you want to listen one more short speech then type "Nitin Patil" otherwise type "not"';
      sound = 'motivate';
      break;
    case 'motivation':
      response = 'I am Listening the most popular speech by Nitin Bangude Patil for you, Listening the speech....If you want to listen one more short speech then type "Nitin Patil" otherwise type "mot"';
      sound = 'motivate';
      break;
    case 'nitin patil':
      response = 'Here is another one about your valuable #Time in your Life...,If you want to listen more speech from different famous speakers then type "Motivation Speakers" other wise type "not" ';
      sound = 'timemotivate';
      break;
    case 'motivation speakers':
      response = 'I am introducing the another assistent by HarshTech,  Hello..,I am another motivation speaker assistent from Harshtech I am designed for give some motivation tips and increase your confidence and also I am listed the some motivation speakers from online server motivation is the best way to improve your growth and increase your positive thinking about your carrier if you want  to try more features and access me then type "access" other wise type "not"';
      sound = 'intro';
      break;
    case 'motivation speaker':
      response = 'I am introducing the another assistent by HarshTech,  Hello..,I am another motivation speaker assistent from Harshtech I am designed for give some motivation tips and increase your confidence and also I am listed the some motivation speakers from online server motivation is the best way to improve your growth and increase your positive thinking about your carrier if you want  to try more features and access me then type "access" other wise type "not"';
      sound = 'intro';
      break;
    case 'access':
      response = 'Instructions: 1)Back to Home Page 2) Go to Read More 3) Fill the Login Form 4) Access the advanced AI powered assistent and enjoy it....';
      sound = 'instructions';
      break;



    case '⚠️ bugs report':
      response = 'There are some bugs in the AI module engine so do not load the correct profile of virtual assistent and user.';
      sound = 'joke';
      sound = 'report';
      // icon = icons;
      break;
    case 'bugs report':
      response = 'There are some bugs in the AI module engine so do not load the correct profile of virtual assistent and user.';
      sound = 'joke';
      sound = 'report';
      // icon = icons;
      break;
    case 'web tools':
      response = 'here you can see the tools';
      sound = 'tools';
      break;
    case '⚙️ web tools':
      response = 'here you can see the tools that in the basi level that type "calculator"';
      sound = 'tools';
      break;
    case '🤹 skills learning':
      response = 'ok, before going to skill learning we motivate you and finding yourself If you want to access the guidence about the learning and the different languages with notes pdfs then the type "access" other wise type "not"';
      sound = 'instructions';
      break;
    case '🤹 skills learning':
      response = 'ok, before going to skill learning we motivate you and finding yourself If you want to access the guidence about the learning and the different languages with notes pdfs then the type "access" other wise type "not"';
      sound = 'instructions';
      break;
    case 'weather':
      response = 'Yes, I am showing the today weather information from Maharsshtra inteface..';
      sound = 'run';
      window.open("www.weatherindia.com");
      window.open("commands.html");
      break;
    case 'time':
      response = 'Opening the Web clock from  HarshTech Web App store ';
      window.open("https://harshadteli.github.io/web-smart-clock/");
      sound = 'run';
      break;
    case 'date':
      response = 'opening calender from the ';
      window.open("https://");
      sound = 'run';
      break;
    case 'news':
      response = 'Ok,Please choose Your News Source 1)The Indian Express, 2) NDTV, 3) News 18, 4) Daily Hunt, 5) Yahoo News, 6)Google News.  Please enter your respective news serial number';
      sound = 'run';
      break;
    case '1':
      response = 'Yes,Opening the The Indian Express News platform.....'
      sound = 'webpage';
      window.open("www.indianexpress.com");
      break;
    case '2':
      response = 'Yes,Opening the India News Channel.....'
      sound = 'run';
      window.open("blank");
      break;
    case '3':
      response = 'Yes,Opening the News 18 webpage from Google.....'
      sound = 'run';
      window.open("www.news18.com");
      break;
    case '4':
      response = 'Yes,Opening the The daily hunt interface.....'
      sound = 'run';
      window.open("www.dailyhunt.in");
      break;
    case '5':
      response = 'Yes,Opening the Yahoo News.....'
      sound = 'run';
      window.open("blank");
      break;
    case '6':
      response = 'Yes,Opening the Latest Google News.....'
      sound = 'run';
      window.open("blank");
      break;
    case 'calculator':
      response = 'Yes, Opening the Web-Calculator from the HarshTech web app store...';
      window.open("https://harshadteli.github.io/chatbotcalculator/");
      sound = 'run';
      break;
    case 'daily workout':
      response = "Let's do 10 squarts, 10 Push-ups and 20 jumping jokes";
      sound = 'run';
      break;
    case 'drink water':
      response = 'Hydration check! Time to drink some water';
      sound = 'run';
      break;
    case 'meditation':
      response = "Let's begin a 5 minute guided meditation";
      sound = 'run';
      break;
    case 'breathe':
      response = 'Take a deep breathe in .... and out....';
      sound = 'run';
      break;
    case 'Who are you?':
      response = 'I am Natasha Chatbot...';
      sound = 'run';
      break;
    case 'What is your name':
      response = 'My self Natasha...';
      sound = 'run';
      break;
    case 'Where are you from?':
      response = 'I am coming from the HarshTech Organization';
      sound = 'run';
      break;
    case 'Who developed you?':
      response = 'Mr. Harshad Teli.';
      sound = 'run';
      break;
    case 'Give me your what technology used?':
      response = 'ACCESS DENIED...!';
      sound = 'run';
      break;
    case 'What is your programmig?':
      response = 'ACCESS DENIED..!';
      sound = 'run';
      break;
    case 'Task Manager':
      response = 'Ok opening the Smart Web Task Manager';
      window.open("https://harshadteli.github.io/web-smart-taskmanager/")
      sound = 'webpage';
      break;
    case 'How are you?':
      response = "I'm ready to help you";
      sound = 'run';
    case 'not':
      response = 'Please,Try another Command...';
      sound = 'not';
      break;

    default:
      response = 'Unknown command. Type "help" to see options.';
      sound = 'error'; icon = icons.error;
  }

  createTypedMessage(botAvatar, `Natasha: ${response}`, 'bot', icon);
  if (!isMuted && audios[sound]) audios[sound].play();
}

document.getElementById('submit-btn').addEventListener('click', () => {
  const input = document.getElementById('user-input').value.trim().toLowerCase();
  if (!input) return;
  createTypedMessage(userAvatar, `${userName}: ${input}`, 'user');
  document.getElementById('user-input').value = '';
  setTimeout(() => handleCommand(input), 700);
});

document.querySelectorAll('.suggest-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const cmd = btn.textContent.trim().toLowerCase();
    createTypedMessage(userAvatar, `${userName}: ${cmd}`, 'user');
    setTimeout(() => handleCommand(cmd), 700);
  });
});


 // Set default image based on current theme
    function setDefaultImage() {
      if (body.classList.contains('dark')) {
        previewImage.src = defaultDarkImage;
      } else {
        previewImage.src = defaultLightImage;
      }
      previewImage.style.display = 'inline';
    }

    // On page load: show dark default image
    window.addEventListener('DOMContentLoaded', () => {
      setDefaultImage();
    });


document.getElementById('theme-toggle').addEventListener('click', () => {
  themeaud.play();
  document.body.classList.toggle('light');
});

document.getElementById('mute-toggle').addEventListener('click', function () {
  muteaud.play();
  isMuted = !isMuted;
  this.textContent = isMuted ? '🔇 Muted' : '🔊 Mute';
});

document.getElementById('export-pdf').addEventListener('click', () => {
  pdfaud.play();
  html2pdf().from(chatLog).save('natasha-chat.pdf');
});


const chatintrobtn = document.getElementById("chatbtn");
const chataud = document.getElementById("chata");
chatintrobtn.addEventListener('click', () => {
  chataud.play();
  setTimeout(() => {

  }, chtaud.duration * 1000);
});
const themeaud = document.getElementById("themeaud");
const muteaud = document.getElementById("muteaud");
const pdgaud = document.getElementById("pdgaud");
const commandsaud = document.getElementById("commandsaud");
const commands = document.getElementById("commands");
commands.addEventListener("click", () => {
  commandsaud.play();
  setTimeout(() => {
    window.location.href = "commands.html";
  }, commandsaud.duration * 1000);
});