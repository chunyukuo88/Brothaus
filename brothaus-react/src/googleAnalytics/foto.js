import ReactGA from "react-ga";

export function carouselGA () {
  ReactGA.event({
    category: 'Carousel',
    action: 'User clicked somewhere in the carousel.'
  });
}
