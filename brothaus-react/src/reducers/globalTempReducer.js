import ACTION_TYPES from "../actions/types";

export default function globalTempReducer(state = 0, action){
  switch (action.type){
    case ACTION_TYPES.FETCH_TEMP: return action.payload;
    default: return { globalTemp: 45 };
  }
}
