function snackbar() {
    let snackbarElement = document.getElementById("snackbar");
    snackbarElement.className = "show";
    setTimeout(function(){ 
      snackbarElement.className = snackbarElement.className.replace("show", ""); 
    }, 3000);
  }