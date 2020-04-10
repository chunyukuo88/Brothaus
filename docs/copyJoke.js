function copyToClipboard() {
  createTextElement();
  displayJokeSnackbar();
  removeTextElement();
};

function createTextElement(){
  const textArea = document.createElement('textarea');
  textArea.setAttribute('style','width:1px;border:0;opacity:0;');
  textArea.id = 'toBeCopied';
  document.body.appendChild(textArea);
  textArea.value = document.getElementById("joke-content").innerHTML;
  textArea.select();
  document.execCommand('copy');
};

function displayJokeSnackbar(){
  const snackbarMessage = document.getElementById('joke-snackbar');
  snackbarMessage.className = 'visible'
  setTimeout(() => { 
    snackbarMessage.className = snackbarMessage.className.replace('visible', '')
    }, 3000);
};

function removeTextElement(){
  const textArea = document.getElementById('toBeCopied');
  document.body.removeChild(textArea);
};