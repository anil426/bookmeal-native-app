import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dishes from './reducers/dishes';
import comments from './reducers/comments';
import leaders from './reducers/leaders';
import promotions from './reducers/promotions';


const configureStore = () => {
  const store = createStore(
    combineReducers({
      dishes,
      comments,
      leaders,
      promotions,
    })
    , applyMiddleware(thunk, logger)
  );

  return store;
};

export default configureStore;