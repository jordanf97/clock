import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import * as React from "react";

import { NavigatorScreenParams } from "@react-navigation/native";
import useColorScheme from "@/hooks/use-color-scheme";
import { NotFoundScreen } from "@/screens";

import { LinkingConfiguration } from "./linking-configuration";
import { SetupNavigator, SetupStackParamList } from "./setup-navigator";

export type RootNavigatorParamList = {
  SetupNavigator: NavigatorScreenParams<SetupStackParamList> | undefined;
  NotFound: undefined;
};

export type RootNavigatorScreenProps<
  Screen extends keyof RootNavigatorParamList
> = NativeStackScreenProps<RootNavigatorParamList, Screen>;

const Stack = createNativeStackNavigator<ReactNavigation.RootParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SetupNavigator"
        component={SetupNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootStack />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </NavigationContainer>
  );
};
