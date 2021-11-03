import { render } from "@testing-library/react-native";
import { LoadingIndicator } from "./loading-indicator";
import React from "react";

it("renders correctly", () => {
  const tree = render(<LoadingIndicator />).toJSON();

  expect(tree).toMatchSnapshot();
});
