import { render } from "@testing-library/react-native";
import React from "react";
import { OverlayLoadingIndicator } from "./overlay-loading-indicator";

it("renders correctly", () => {
  const tree = render(<OverlayLoadingIndicator />).toJSON();

  expect(tree).toMatchSnapshot();
});
