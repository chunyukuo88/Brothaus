import ACTION_TYPES from "../actions/types";

export default function globalHumidityReducer(state = 0, action){
  switch (action.type){
    case ACTION_TYPES.FETCH_HUMIDITY: return action.payload;
    default: return { globalHumidity: 50 };
  }
}
