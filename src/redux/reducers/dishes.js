import * as ActionTypes from '../actionTypes';

const initialState = {
  IsLoading: true,
  error: null,
  dishes: []
};

const dishes = (state=initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_DISHES:
      return {...state, IsLoading: false, error: null, dishes: action.payload}
    case ActionTypes.DISHES_LOADING:
      return {...state, isLoading: true, error: null, dishes: []}
    case ActionTypes.GET_DISHES_FAILED:
      return {...state, isLoading: false, error: action.payload, dishes: []}
    default:
      return state;
  }
};

export default dishes;