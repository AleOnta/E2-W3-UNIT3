import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
  saved: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        saved: [...state.saved, action.payload],
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        saved: state.saved.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
