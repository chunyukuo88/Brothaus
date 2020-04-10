function copyToClipboard() {
  
  const textArea = document.createElement('textarea');
  textArea.setAttribute('style','width:1px;border:0;opacity:0;');
  document.body.appendChild(textArea);
  textArea.value = document.getElementById("joke-content").innerHTML;
  textArea.select();
  document.execCommand('copy');
  jokeSnackbar();
  document.body.removeChild(textArea)
};

function jokeSnackbar(){
  const snackbarMessage = document.getElementById('joke-snackbar');
  snackbarMessage.className = 'visible'
  setTimeout(() => { 
    snackbarMessage.className = snackbarMessage.className.replace('visible', '')
    }, 3000);
};