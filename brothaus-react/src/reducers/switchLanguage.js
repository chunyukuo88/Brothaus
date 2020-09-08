export default function languageReducer (state = 'English', action){
 switch (action.type){
   case 'RUSSIAN':
     return 'russian';
   case 'CHINESE':
     return 'chinese';
   default:
     return state;
 }
}
