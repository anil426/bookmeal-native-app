import * as ActionTypes from '../actionTypes';

const initialState = {
  IsLoading: true,
  error: null,
  promotions: []
};

const promotions = (state=initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROMO:
      return {...state, IsLoading: false, error: null, promotions: action.payload}
    case ActionTypes.PROMOS_LOADING:
      return {...state, isLoading: true, error: null, promotions: []}
    case ActionTypes.ADD_PROMO_FAILED:
      return {...state, isLoading: false, error: action.payload, promotions: []}
    default:
      return state;
  }
};

export default promotions;