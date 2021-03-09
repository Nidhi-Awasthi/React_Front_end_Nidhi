// // Drawer.test.js
import React from "react";
import renderer from "react-test-renderer";
import Drawer from "./Drawer";

test("Drawer", () => {
  const component = renderer.create(
    <Drawer
      cardDetail={{
        coreData: {
          number: "INC0010128",
          assignee: "",
          application: "application value",
          assignee: "System Administrator",
          shortDescription: "No approved expenses",
          made_sla: true,
          upon_reject: "Cancel all future Tasks",
          opened_by: "System Administrator",
          priority: "5-Planning",
          activity_due: "UNKOWN",
          approval: "New",
        },
      }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
