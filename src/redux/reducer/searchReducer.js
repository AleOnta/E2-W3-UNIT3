import { ADD_QUERY_RESULT, RETURN_ERROR, SET_LOAD_OFF, SET_LOAD_ON } from "../actions";

const initialState = {
  queryResult: [],
  isLoading: false,
  hasError: false,
  errorMessagge: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUERY_RESULT:
      return {
        ...state,
        queryResult: action.payload,
      };

    case SET_LOAD_ON:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_LOAD_OFF:
      return {
        ...state,
        isLoading: action.payload,
      };

    case RETURN_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessagge: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
