import * as ActionTypes from '../actionTypes';

const initialState = {
  error: null,
  comments: []
};

const comments = (state=initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      return {...state, error: null, comments: action.payload}
    case ActionTypes.ADD_COMMENT_FAILED:
      return {...state, error: action.payload, comments: []}
    default:
      return state;
  }
};

export default comments;