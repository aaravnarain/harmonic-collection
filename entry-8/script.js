
const words = ["Dumbo", "Pier 17", "Coney Island", "Rockaway Beach", "Take the NYC Ferry!", "Battery Park", "Pier 57", "Domino Park", "Marsha P. Johnson State Park", "Hunter's Point South Park"];

    function generateRandomWord() {
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex];
      document.getElementById("randomWord").innerText = randomWord;
    }

    var div = document.querySelector('div'),
    body = document.querySelector('body');    
    
    div.onclick = function () {
      
      div.classList.toggle('on');
      div.classList.toggle('off');
      body.classList.toggle('back-color');
      
    }