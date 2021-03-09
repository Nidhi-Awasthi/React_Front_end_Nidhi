// // customCard.test.js
import React from "react";
import renderer from "react-test-renderer";
import CustomCard from "./CustomCard";

test("CustomCard", () => {
  const component = renderer.create(
    <CustomCard
      card={{
        coreData: {
          state: "New",
          number: "INC0010128",
          application: "application value",
          assignee: "System Administrator",
          shortDescription: "No approved expenses",
        },
      }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
