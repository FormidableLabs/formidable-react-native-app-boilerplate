import React from "react-native";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "../../store/configure-store";
import AppContainer from "../app";
import AppComponent from "../../components/app";

describe("AppContainer", () => {
  let store;

  before(() => {
    store = configureStore();
  });

  it("wraps the `AppComponent`", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
    const wrappedComponent = wrapper.type().WrappedComponent;
    expect(wrappedComponent).to.equal(AppComponent);
  });
});
