function showOrHideMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.drop-button')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
      }
    }
  }
}

let jokeData;

async function fetchJoke(){
    const url = "https://icanhazdadjoke.com/";
    const options = { method: "GET", 
                      headers: { "Accept": "application/JSON" }};
    await fetch(url, options)
        .then(res => res.json())
        .then(data => {
          jokeData = data.joke;
        })
        .catch(()=>{'Fetch failed'});
}

function renderJoke(){
  let jokeString = document.getElementById('joke-content');
  fetchJoke()
    .then(
      jokeString.innerText = jokeData
  );
}

function snackbar() {
  let snackbarElement = document.getElementById("snackbar");
  snackbarElement.className = "show";
  setTimeout(function(){ 
    snackbarElement.className = snackbarElement.className.replace("show", ""); 
  }, 3000);
}

function changeLanguage(){
  const languageSwitch = document.getElementById('language-switch');
  if (languageSwitch.className === 'English'){
    languageSwitch.className = '中文';
    translateToChinese();
  } else {
    languageSwitch.className = 'English';
    translateToEnglish();
  }
}

function translateToChinese(){
  const wooblersHouse = document.getElementById('wooblers-house');  
    wooblersHouse.innerText = '小巫之屋';
  const about = document.getElementById('about');
    about.innerText = '關於';
  const repo = document.getElementById('repo');
    repo.innerText = '本站之原碼';    
  const language = document.getElementById('chinese');
    language.innerText = 'English';  
  const snackbar = document.getElementById('snackbar');
    snackbar.innerText = '本站使用普通JS、Sass以及Web Components等技術。';  
  const jokeInstructions = document.getElementsByClassName('joke-instructions');
    jokeInstructions[0].innerText = '想學一個無比冷的英文笑話麼？';
  const jokeLabel = document.getElementsByClassName('joke-label');
    jokeLabel[0].innerText = '哎，這麼爛的笑話：';
  applyChineseFonts();
}

function translateToEnglish(){
  const wooblersHouse = document.getElementById('wooblers-house');  
    wooblersHouse.innerText = 'Woobler\'s House';
  const about = document.getElementById('about');
    about.innerText = 'About';
  const repo = document.getElementById('repo');
    repo.innerText = 'Code';    
  const language = document.getElementById('chinese');
    language.innerText = '話語版本';    
  const snackbar = document.getElementById('snackbar');
    snackbar.innerText = 'Made with vanilla JavaScript, Sass, and Web Components.';  
  const jokeInstructions = document.getElementsByClassName('joke-instructions');
    jokeInstructions.innerText = 'Click the button for a lousy joke!';
  const jokeLabel = document.getElementsByClassName('joke-label');
    jokeLabel.innerText = 'The lousy joke shows up here!';
    applyEnglishFonts();
}

function applyChineseFonts(){
  const wooblersHouse = document.getElementById('wooblers-house');
  wooblersHouse.style.font = 'ZCOOL KuaiLe';
}

function applyEnglishFonts(){

}