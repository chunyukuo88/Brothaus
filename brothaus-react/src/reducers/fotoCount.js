export default function fotoCountReducer (state = 0, action){
  switch (action.type) {
    case 'UPDATE_FROM_S3':
      return action.payload;
    default:
      return state;
  }
}
