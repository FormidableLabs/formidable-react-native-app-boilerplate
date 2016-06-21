/* @flow */
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import AppComponent from "../components/app";

const mapStateToProps = (state) => {
  return {
    isFetching: state.data.isFetching,
    message: state.data.message
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: bindActionCreators(fetchData, dispatch)
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);
