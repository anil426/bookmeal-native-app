import * as ActionTypes from '../actionTypes';

const initialState = {
  IsLoading: true,
  error: null,
  comments: []
};

const leaders = (state=initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_LEADERS:
      return {...state, IsLoading: false, error: null, leaders: action.payload}
    case ActionTypes.LEADERS_LOADING:
      return {...state, isLoading: true, error: null, leaders: []}
    case ActionTypes.ADD_LEADERS_FAILED:
      return {...state, isLoading: false, error: action.payload, leaders: []}
    default:
      return state;
  }
};

export default leaders;