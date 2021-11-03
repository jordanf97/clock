import React from "react";
import { render } from "@testing-library/react-native";
import { BarcodeScanner } from "./barcode-scanner";

// todo: test all states of this component
it("renders correctly", () => {
  const tree = render(<BarcodeScanner onScan={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
