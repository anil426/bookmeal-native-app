import React from 'react';
import Main from './src/components/Main';
import { Provider } from "react-redux";
import ConfigureStore from "./src/redux/configureStore";
import { PersistGate } from 'redux-persist/es/integration/react'
import { Loading } from './src/components/Loader';

const { persistor, store } = ConfigureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading />}
          persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}
