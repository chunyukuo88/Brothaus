export default function globalTempReducer(state = 0, action){
  switch (action.type){
    case 'GLOBAL_TEMP': return action.payload;
    default: return 40;
  }
}
