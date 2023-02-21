// actions for query reducer:
export const ADD_QUERY_RESULT = "ADD_QUERY_RESULT";

export const jobFetcherAction = (e, endpoint, query) => {
  e.preventDefault();
  return async (dispatch) => {
    try {
      const response = await fetch(endpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();

        dispatch({
          type: ADD_QUERY_RESULT,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// actions for favourites reducer:
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const addFavouriteCompanyAction = (data) => ({
  type: ADD_TO_FAVOURITES,
  payload: data,
});

export const removeFavouriteCompanyAction = (index) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: index,
});
