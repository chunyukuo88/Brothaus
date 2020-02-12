
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
//[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
    const localWeather = document.getElementById('columbus-weather');
      const currentTemp = document.getElementById('cbus-temp');
      localWeather.innerText = '這裡有' + fahrenheitToCelsius(currentTemp.innerText) + '°';
//[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
      const language = document.getElementById('chinese');
      language.innerText = 'English';  
    const snackbar = document.getElementById('snackbar');
      snackbar.innerText = '本站使用普通JS、Sass以及Web Components等技術。';  
    const jokeInstructions = document.getElementsByClassName('joke-instructions');
      jokeInstructions[0].innerText = '想學個無比冷的英文笑話麼？';
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
    const localWeather = document.getElementById('columbus-weather');
      const currentTemp = document.getElementById('cbus-temp');
      localWeather.innerText = 'It\'s ' + celsiusToFahrenheit(currentTemp) + '° here';    
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
    wooblersHouse.style.fontFamily = 'ZCOOL KuaiLe';
  }
  
  function applyEnglishFonts(){
    const wooblersHouse = document.getElementById('wooblers-house');
    wooblersHouse.style.fontFamily = 'Luckiest Guy';
  }

  function fahrenheitToCelsius(degreesF){
    return Math.round(5/9 * (degreesF-32));
  }

  function celsiusToFahrenheit(degreesC){
    return Math.round((degreesC * 1.8) + 32);
  }