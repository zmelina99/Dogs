import {
  GET_DOGS,
  GET_DOG_DETAIL,
  GET_TEMPERAMENTS,
} from "../Actions/index.js";
const initialState = {
  dogs: [],
  dogDetail: [],
  temperaments: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_DOGS) {
    return {
      ...state,
      dogs: action.payload,
    };
  }
  if (action.type === GET_DOG_DETAIL) {
    return {
      ...state,
      dogDetail: action.payload,
    };
  }
  if (action.type === GET_TEMPERAMENTS) {
    return {
      ...state,
      temperaments: action.payload,
    };
  }

  return state;
}

export default rootReducer;
