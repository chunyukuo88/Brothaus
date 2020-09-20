import getFotoCount from '../components/Carousel/photoCount';

export default function fotoCountReducer (state = 0, action){
  switch (action.type) {
    case 'UPDATE_FROM_S3': return fotoCount();
    default: return state;
  }
}

const fotoCount = () => getFotoCount().then(count => count);
