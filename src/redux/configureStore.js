import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dishes from './reducers/dishes';
import leaders from './reducers/leaders';
import comments from './reducers/comments';
import favorites from './reducers/favorites';
import promotions from './reducers/promotions';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const config = {
  key: 'root',
  storage,
  debug: true
};

const configureStore = () => {
  const store = createStore(
    persistCombineReducers(config, {
      dishes,
      leaders,
      comments,
      favorites,
      promotions,
    })
    , applyMiddleware(thunk, logger)
  );

  const persistor = persistStore(store)
  return { persistor, store };
};

export default configureStore;