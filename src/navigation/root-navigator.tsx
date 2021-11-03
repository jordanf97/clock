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
import { useColorScheme } from "@/hooks";
import { NotFoundScreen } from "@/screens";

import { LinkingConfiguration } from "./linking-configuration";
import { SetupNavigator, SetupStackParamList } from "./setup-navigator";
import {
  AuthenticationNavigator,
  AuthenticationStackParamList,
} from "./authentication-navigator";
import { useStore } from "@/stores";
import { observer } from "mobx-react-lite";

export type RootNavigatorParamList = {
  SetupNavigator: NavigatorScreenParams<SetupStackParamList> | undefined;
  AuthenticationNavigator:
    | NavigatorScreenParams<AuthenticationStackParamList>
    | undefined;
  NotFound: undefined;
};

export type RootNavigatorScreenProps<
  Screen extends keyof RootNavigatorParamList
> = NativeStackScreenProps<RootNavigatorParamList, Screen>;

const Stack = createNativeStackNavigator<ReactNavigation.RootParamList>();

export const RootNavigator = observer(() => {
  const colorScheme = useColorScheme();
  const configuration = useStore("configuration");

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator>
        <Stack.Group screenOptions={{ animation: "none" }}>
          {configuration.isConfigured ? (
            <>
              <Stack.Screen
                name="AuthenticationNavigator"
                component={AuthenticationNavigator}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="SetupNavigator"
                component={SetupNavigator}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Group>

        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: "Oops!" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
