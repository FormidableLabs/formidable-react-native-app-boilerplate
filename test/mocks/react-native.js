/**
 * Mock React Native with React for testing.
 */
import React from "react";

const createMockedComponent = (type) => {
  return React.createClass({
    displayName: type,
    propTypes: {
      children: React.PropTypes.node
    },
    render() {
      return <div {...this.props}>{this.props.children}</div>;
    }
  });
};


export const PropTypes = React.PropTypes;
export const PixelRatio = {
  get: () => 1.0
};
export const ScrollView = createMockedComponent("ScrollView");
export const StatusBarIOS = createMockedComponent("StatusBarIOS");
export const StyleSheet = {
  create: (style) => style
};
export const Text = createMockedComponent("Text");
export const TouchableOpacity = createMockedComponent("TouchableOpacity");
export const View = createMockedComponent("View");


export default React;
