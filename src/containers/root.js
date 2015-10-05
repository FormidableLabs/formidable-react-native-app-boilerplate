/* @flow */

import React from "react-native";
import { Provider } from "react-redux/native";
import configureStore from "../store/configure-store";
import Navigator from "../components/navigator";

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Navigator />}
      </Provider>
    );
  }
}

export default Root;
