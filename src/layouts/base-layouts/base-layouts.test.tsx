import { render } from "@testing-library/react-native";
import React from "react";
import {
  CentredKeyboardAvoidingView,
  CentredLayout,
  CentredView,
  FlexLayout,
  FlexView,
} from "..";

it("renders the FlexLayout correctly", () => {
  const tree = render(<FlexLayout />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders the FlexView correctly", () => {
  const tree = render(<FlexView />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders the CentredView correctly", () => {
  const tree = render(<CentredView />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders the CentredLayout correctly", () => {
  const tree = render(<CentredLayout />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders the CentredKeyboardAvoidingView correctly", () => {
  const tree = render(<CentredKeyboardAvoidingView />).toJSON();
  expect(tree).toMatchSnapshot();
});
