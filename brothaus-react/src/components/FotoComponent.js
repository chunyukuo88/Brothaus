export class myFoto extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});

    //create elements within the custom element:
    const listItem = document.createElement('li');
    const wrapper = document.createElement('wrapper');
    wrapper.setAttribute('class', 'image-wrapper');
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.setAttribute('class', 'foto');
    image.setAttribute('loading', 'lazy');
    const caption = document.createElement('figcaption');
    caption.setAttribute('class', 'caption');
    let text = this.getAttribute('text');
    caption.textContent = text;

    // Insert icon
    let imgUrl;
    if (this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = 'images/default.png';
    }
    image.src = imgUrl;

    // Apply external styles to the shadow dom
    const linkElem = document.createElement('link');

    let style = document.createElement('style');
    style.textContent =
      `
    
    li {
      list-style: none;
    }
    
    li .image-wrapper {
    }
    
    li .image-wrapper figure {
      position: relative;
      display: block;
      margin: 5px 0 10px 0;
    }
    
    li .image-wrapper figure figcaption {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      height: 50%;
      left: 70%;
      overflow-wrap: anywhere;
      position: absolute;
      top: 20%;
      width: 100%;
      background-color: orange;
      color: #FFF6BB;
      font-family: "Fredoka One";
      font-size: 1.2rem;
      opacity: 0;
      -webkit-transition: opacity .5s ease-in-out;
      transition: opacity .5s ease-in-out;
      padding: 15px;
      border: 15px;
      margin: 0 auto;
    }
    
    li .image-wrapper figure:hover figcaption {
      opacity: 0.93;
      -webkit-transition: ease-in-out;
      transition: ease-in-out;
    }
    `;
    shadow.appendChild(linkElem);
    shadow.appendChild(style);

    // Attach the other created elements to the shadow dom

    shadow.appendChild(listItem);
    listItem.appendChild(wrapper);
    wrapper.appendChild(figure);
    figure.appendChild(image);
    figure.appendChild(caption);
  }
}

// Define the new element
customElements.define('fot-foto', myFoto);
