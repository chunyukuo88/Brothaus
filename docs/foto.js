class myFoto extends HTMLElement {
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
      // linkElem.setAttribute('rel', 'stylesheet');
      // linkElem.setAttribute('href', './css/main.css');
      let style = document.createElement('style');
      style.textContent = 
      `
      @-webkit-keyframes shake {
        0% {
          -webkit-transform: rotate(0deg);
                  transform: rotate(0deg);
        }
        10% {
          -webkit-transform: rotate(-3deg);
                  transform: rotate(-3deg);
        }
        20% {
          -webkit-transform: rotate(3deg);
                  transform: rotate(3deg);
        }
        30% {
          -webkit-transform: rotate(0deg);
                  transform: rotate(0deg);
        }
        40% {
          -webkit-transform: rotate(3deg);
                  transform: rotate(3deg);
        }
        50% {
          -webkit-transform: rotate(-3deg);
                  transform: rotate(-3deg);
        }
        60% {
          -webkit-transform: rotate(0deg);
                  transform: rotate(0deg);
        }
        70% {
          -webkit-transform: rotate(-3deg);
                  transform: rotate(-3deg);
        }
        80% {
          -webkit-transform: rotate(3deg);
                  transform: rotate(3deg);
        }
        90% {
          -webkit-transform: rotate(0deg);
                  transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(-3deg);
                  transform: rotate(-3deg);
        }
      }
      @keyframes shake {
        0% {
          -webkit-transform: rotate(0deg);
                  transform: rotate(0deg);
        }
        10% {
          -webkit-transform: rotate(-3deg);
                  transform: rotate(-3deg);
        }
        20% {
          -webkit-transform: rotate(3deg);
                  transform: rotate(3deg);
        }
        30% {
          -webkit-transform: rotate(0deg);
                  transform: rotate(0deg);
        }
        40% {
          -webkit-transform: rotate(3deg);
                  transform: rotate(3deg);
        }
        50% {
          -webkit-transform: rotate(-3deg);
                  transform: rotate(-3deg);
        }
        60% {
          -webkit-transform: rotate(0deg);
                  transform: rotate(0deg);
        }
        70% {
          -webkit-transform: rotate(-3deg);
                  transform: rotate(-3deg);
        }
        80% {
          -webkit-transform: rotate(3deg);
                  transform: rotate(3deg);
        }
        90% {
          -webkit-transform: rotate(0deg);
                  transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(-3deg);
                  transform: rotate(-3deg);
        }
      }
      li {
        list-style: none;
        height: 55rem;
        width: 55rem;
      }
      
      li .image-wrapper {
        height: 50rem;
        width: 50rem;
      }
      
      li .image-wrapper figure {
        position: relative;
        display: block;
        margin: 5px 0 10px 0;
        width: 350px;
      }
      
      li .image-wrapper figure img {
        height: 48rem;
        width: 48rem;
        -webkit-clip-path: polygon(0 0, 9% 7%, 15% 0%, 22% 8%, 32% 0, 100% 0, 100% 100%, 92% 93%, 88% 100%, 79% 93%, 72% 100%, 0 100%);
        clip-path: polygon(0 0, 9% 7%, 15% 0%, 22% 8%, 32% 0, 100% 0, 100% 100%, 92% 93%, 88% 100%, 79% 93%, 72% 100%, 0 100%);
      }
      
      li .image-wrapper figure figcaption {
        -webkit-clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
                clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
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
        -webkit-animation: shake 15s;
                animation: shake 15s;
        -webkit-animation-iteration-count: infinite;
                animation-iteration-count: infinite;
        opacity: 0.93;
        -webkit-transition: ease-in-out;
        transition: ease-in-out;
      }
      `;
        shadow.appendChild(linkElem);
        shadow.appendChild(style);
        console.log(style.isConnected);
  
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