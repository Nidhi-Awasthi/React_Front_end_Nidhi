// customCard.test.js
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import store from "../store";
import CustomPagination from "./CustomPagination";

test("CustomPagination", () => {
  const component = renderer.create(
    <Provider store={store}>
      <CustomPagination />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
