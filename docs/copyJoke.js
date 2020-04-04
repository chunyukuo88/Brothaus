function copyToClipboard (){
  
  const textArea = document.createElement('textarea');
  textArea.setAttribute
      ('style','width:1px;border:0;opacity:0;');
  document.body.appendChild(textArea);
  textArea.value = document.getElementById("joke-content").innerHTML;
  textArea.select();
  document.execCommand('copy');
  alert(`You have copied the following lousy joke to your clipboard:\n\n ${textArea.value}`);
  document.body.removeChild(textArea)
};