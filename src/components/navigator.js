/* @flow */

import React from "react-native";
import App from "../containers/app";

const {
  NavigatorIOS
} = React;

class Navigator extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          component: App,
          title: "Starter App"
        }}
      />
    );
  }
}

export default Navigator;
