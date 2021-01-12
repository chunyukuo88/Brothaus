import ACTION_TYPES from '../actions/types';

const initialState = ACTION_TYPES.ENGLISH;

export default function languageReducer (state = initialState, action){
    switch (action.type){
    case ACTION_TYPES.RUSSIAN: return action.payload;
    case ACTION_TYPES.CHINESE: return action.payload;
    case ACTION_TYPES.ENGLISH: return action.payload;
    default: return initialState;
    }
}
