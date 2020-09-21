export default function languageReducer (state = 'english', action){
 switch (action.type){
   case 'RUSSIAN': return action.payload;
   case 'CHINESE': return action.payload;
   case 'ENGLISH': return action.payload;
   default: return state;
 }
}
