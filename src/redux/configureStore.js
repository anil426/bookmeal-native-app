import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dishes from './reducers/dishes';
import leaders from './reducers/leaders';
import comments from './reducers/comments';
import favorites from './reducers/favorites';
import promotions from './reducers/promotions';


const configureStore = () => {
  const store = createStore(
    combineReducers({
      dishes,
      leaders,
      comments,
      favorites,
      promotions,
    })
    , applyMiddleware(thunk, logger)
  );

  return store;
};

export default configureStore;