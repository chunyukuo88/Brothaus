export default function globalHumidityReducer(state = 0, action){
  switch (action.type){
    case 'GLOBAL_HUMIDITY': return action.payload;
    default: return { humidity: 50 };
  }
}
