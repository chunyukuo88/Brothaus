import ReactGA from "react-ga";

export function welcomeTextGA () {
  ReactGA.event({
    category: 'Button',
    action: 'User clicked the Welcome text in the heading.'
  });
}

export function russianIconGA () {
  ReactGA.event({
    category: 'Localization icon',
    action: 'User changed the localization to Russian.'
  });
}

export function englishIconGA () {
  ReactGA.event({
    category: 'Localization icon',
    action: 'User changed the localization to English.'
  });
}

export function chineseIconGA () {
  ReactGA.event({
    category: 'Localization icon',
    action: 'User changed the localization to Chinese.'
  });
}

export function mouseOverTitle () {
  ReactGA.event({
    category: 'Mouse enters title',
    action: 'User moused over the title.'
  });
}
