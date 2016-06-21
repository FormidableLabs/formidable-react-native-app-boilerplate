/* @flow */

import React from "react";
import { Provider } from "react-redux";
import configureStore from "../store/configure-store";
import Scene from "../components/scene";

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <Scene />
    </Provider>
  );
};

export default Root;
