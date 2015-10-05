/* @flow */

import React from "react-native";
import { connect } from "react-redux/native";
import { fetchData } from "../actions";

const {
  Text,
  View
} = React;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 64}}>
        <Text>{this.props.isFetching ? "Loading" : this.props.message}</Text>
      </View>
    );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func,
  message: React.PropTypes.string,
  isFetching: React.PropTypes.bool
};

App.defaultProps = {
  dispatch: () => {},
  isFetching: false,
  message: ""
};

export default connect((state) => ({
  isFetching: state.data.isFetching,
  message: state.data.message
}))(App);
