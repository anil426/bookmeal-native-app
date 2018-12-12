import * as ActionTypes from '../actionTypes';

const initialState = {
  favorites: []
};

const favorites = (state=initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FAVORITES:
      return {...state, favorites: [...state.favorites, action.payload]}
    default:
      return state;
  }
};

export default favorites;