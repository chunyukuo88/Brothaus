dragElement(document.getElementById("pita"));

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
}

function closeDragElement() {// stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
}

function dragElement(theBreadBalloon) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    theBreadBalloon.onmousedown = dragMouseDown;
    // set the element's new position:
    theBreadBalloon.style.top = (theBreadBalloon.offsetTop - pos2) + "px";
    theBreadBalloon.style.left = (theBreadBalloon.offsetLeft - pos1) + "px";
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
}