const setTranslate = (x, y, element) => {
    element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };
  
  /**
   * Simple Draggable Utility
   * @param {String}   selector    CSS Selector of the container element
   * @param {String}   dragElement CSS Selector of the drag handler element (optional)
   * @param {Function} onDrag      Callback handler to fire while dragging
   * @param {Function} onDragEnd   Callback handler to fire on drag end
   * @param {Function} onDragStart Callback handler to fire on drag start
   */
  const draggable = ({ selector, dragElement, onDrag, onDragEnd, onDragStart }) => {
    let dragging;
    let currentX, currentY, initialX, initialY;
    let xOffset = 0;
    let yOffset = 0;
    
    const container = document.querySelector(selector);
    
    container.addEventListener('mousedown', function(e) {
      e.preventDefault();
  
      if (!dragElement || dragElement && e.target.closest(dragElement) !== null) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
  
        dragging = container;
  
        dragging.classList.add('ui-dragging');
        
        if (typeof(onDragStart) === 'function') {
          onDragStart(e, dragging, initialX, initialY);
        }
      }
    });
  
    document.addEventListener('mouseup', function(e) {
      if (dragging) {
        initialX = currentX;
        initialY = currentY;
  
        dragging.classList.remove('ui-dragging');
  
        if (typeof(onDragEnd) === 'function') {
          onDragEnd(e, dragging, initialX, initialY);
        }
      }
  
      dragging = null;
    });
  
    document.addEventListener('mousemove', function(e) {
      if (dragging) {
        e.preventDefault();
  
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
  
        xOffset = currentX;
        yOffset = currentY;
  
        setTranslate(currentX, currentY, dragging);
  
        if (typeof(onDrag) === 'function') {
          onDrag(e, dragging, currentX, currentY);
        }
      }
    });
  }
  let zIndex = 100;
  
  document.querySelectorAll('[draggable]').forEach((element) => {
    const data = element.dataset;
    
    draggable({
      selector: data.container,
      dragElement: data.dragElement,
      onDragStart(e, element, x, y) {
        element.style.zIndex = zIndex++;
      }
    });
  });