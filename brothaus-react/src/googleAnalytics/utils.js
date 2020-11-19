import ReactGA from 'react-ga';

export function buildGAEvent (category, action) {
    return ReactGA.event({
        category: category,
        action: action
    });
}