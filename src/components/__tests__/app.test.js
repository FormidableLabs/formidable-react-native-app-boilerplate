import React, {
  ScrollView,
  Text
} from "react-native";
import { shallow } from "enzyme";
import AppComponent from "../app";

describe("AppComponent", () => {
  it("contains a `ScrollView`", () => {
    const wrapper = shallow(
      <AppComponent />
    );
    expect(wrapper.find(ScrollView)).to.have.length(1);
  });
  it("contains 'Loading' text while `isFetching`", () => {
    const wrapper = shallow(
      <AppComponent isFetching />
    );
    expect(wrapper.find(Text).contains("Loading")).to.be.true;
  });
});
