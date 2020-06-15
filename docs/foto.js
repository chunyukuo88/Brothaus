class myFoto extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback(){
    //Pieces
    const shadow = this.attachShadow({mode: 'open'});
    const listItem = document.createElement('li');
    const wrapper = document.createElement('wrapper');
    wrapper.setAttribute('class', 'image-wrapper');
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.setAttribute('class', 'foto');
    image.setAttribute('loading', 'lazy');
    const caption = document.createElement('figcaption');
    caption.setAttribute('class', 'caption');

    //Attributes
    const text = this.getAttribute('text');
    caption.textContent = text;
    const imgUrl = (this.hasAttribute('img')) ? this.getAttribute('img'): 'images/default.png';
    image.src = imgUrl;

    //Style
    const style = document.createElement('style');
    style.textContent = `
    li {
      list-style: none;
      height: 55rem;
      width: 55rem;
    }
    
    .image-wrapper {
      height: 50rem;
      width: 50rem;
    }
    
    .image-wrapper figure {
      position: relative;
      display: block;
      margin: 5px 0 10px 0;
      width: 350px;
    }
    
    .image-wrapper figure img {
      height: 48rem;
      width: 48rem;
      -webkit-clip-path: polygon(0 0, 11% 0, 11% 7%, 19% 7%, 19% 0, 100% 0, 100% 100%, 39% 100%, 39% 94%, 30% 94%, 30% 100%, 0 100%);
      clip-path: polygon(0 0, 11% 0, 11% 7%, 19% 7%, 19% 0, 100% 0, 100% 100%, 39% 100%, 39% 94%, 30% 94%, 30% 100%, 0 100%);
    }
    
    .image-wrapper figure figcaption {
      -webkit-clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
              clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: center;
      align-items: center;
      
      background-color: orange;
      color: #FFF6BB;
      font-family: "Fredoka One";
      font-size: 1.2rem;
      opacity: 0;
      
      height: 50%;
      width: 100%;
      left: 70%;
      top: 20%;
      overflow-wrap: anywhere;
      position: absolute;
      transition: opacity .5s ease-in-out;
      
      padding: 15px;
      border: 15px;
      margin: 0 auto;
    }
    
    li .image-wrapper figure:hover figcaption {
      opacity: 0.93;
      -webkit-transition: ease-in-out;
      transition: ease-in-out;
    }`;

    //Assembly
    shadow.appendChild(style);
    shadow.appendChild(listItem);
    listItem.appendChild(wrapper);
    wrapper.appendChild(figure);
    figure.appendChild(image);
    figure.appendChild(caption);
  }
}

customElements.define('fot-foto', myFoto);
