import React from "react";
import { View as _View, Text as _Text } from "react-native";
// import { useTheme as _useTheme } from "@ui-kitten/components";

export const Spinner = () => <></>;

/**
 * We can test the base theme values in isolation
 * though we should be able to assert any changes to
 * theme keys within components
 */
export const useTheme = () =>
  new Proxy(
    {},
    {
      get(target, name: string) {
        return `theme-key-${name}`;
      },
    }
  );

/**
 * Mock out the UI Kitten base components for RN ones
 */
export const Layout = _View;

export const Text = _Text;
