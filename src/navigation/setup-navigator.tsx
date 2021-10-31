import {
  ManualSetupModal,
  QrScanModal,
  LandingScreen,
} from "@/screens/SetupScreens";
import { CompositeScreenProps } from "@react-navigation/core";

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import * as React from "react";
import { RootNavigatorParamList } from "./root-navigator";

export type SetupStackParamList = {
  LandingScreen: undefined;
  ManualSetupModal: undefined;
  QrScanModal: undefined;
};

export type SetupStackScreenProps<Screen extends keyof SetupStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<SetupStackParamList, Screen>,
    NativeStackScreenProps<RootNavigatorParamList>
  >;

const Stack = createNativeStackNavigator<SetupStackParamList>();

export const SetupNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="ManualSetupModal"
          component={ManualSetupModal}
          options={{ title: "Manual Setup" }}
        />

        <Stack.Screen
          name="QrScanModal"
          component={QrScanModal}
          options={{ title: "Scan QR Code" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
