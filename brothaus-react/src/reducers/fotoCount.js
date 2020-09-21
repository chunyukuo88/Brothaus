import getFotoCount from "../components/Carousel/photoCount";

export default function fotoCountReducer (state = 0, action){
  switch (action.type) {
    case 'UPDATE_FROM_S3': return getFotoCount().then(result => result);
    default: return state;
  }
}
