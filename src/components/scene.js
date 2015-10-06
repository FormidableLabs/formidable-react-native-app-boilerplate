/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import App from "../containers/app";
import NavigationBar from "./navigation-bar";

let {
  Navigator,
  View
} = React;

class Scene extends React.Component {
  renderScene(route: Object, navigator: Object) {
    const Component = route.component;
    return (
      <View style={{flex: 1}}>
        <NavigationBar
          backgroundStyle={{backgroundColor: "#eee"}}
          navigator={navigator}
          route={route}
          title={route.title}
          titleColor="#333"
        />
        <Component
          navigator={navigator}
          route={route}
          {...route.passProps}
        />
      </View>
    );
  }
  render() {
    return (
      <Navigator
        style={{flex: 1}}
        renderScene={this.renderScene}
        initialRoute={{
          component: App,
          title: "Starter App"
        }}
      />
    );
  }
}

export default Scene;
