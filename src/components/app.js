/* @flow */
import React from "react";

import {
  Text,
  ScrollView
} from "react-native";

class AppComponent extends React.Component {

  static propTypes = {
    fetchData: React.PropTypes.func,
    message: React.PropTypes.string,
    isFetching: React.PropTypes.bool
  };

  static defaultProps = {
    fetchData: () => {},
    isFetching: false,
    message: ""
  };

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>{this.props.isFetching ? "Loading" : this.props.message}</Text>
      </ScrollView>
    );
  }
}

export default AppComponent;
