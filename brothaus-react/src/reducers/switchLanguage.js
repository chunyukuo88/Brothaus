export default function languageReducer (state = 'english', action){
 switch (action.type){
   case 'RUSSIAN': return 'russian';
   case 'CHINESE': return 'chinese';
   case 'ENGLISH': return 'english';
   default: return state;
 }
}
