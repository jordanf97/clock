import React from "react";

import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { useColorScheme } from "@/hooks";
import LightTheme from "./light-theme";
import DarkTheme from "./dark-theme";
import { StatusBar } from "expo-status-bar";

export const ThemeMap = {
  light: LightTheme,
  dark: DarkTheme,
};

import * as eva from "@eva-design/eva";
import materialIconsPack from "./material-icons-pack";

export const ThemeProvider: React.FC = ({ children }) => {
  const colourScheme = useColorScheme();

  const theme: Record<string, any> = ThemeMap[colourScheme];

  return (
    <>
      <IconRegistry icons={materialIconsPack} />
      <StatusBar style={colourScheme === "light" ? "dark" : "light"} />

      <ApplicationProvider {...eva} theme={theme}>
        {children}
      </ApplicationProvider>
    </>
  );
};
