import { EmployeeSigninScreen } from "@/screens/authentication-screens";
import { CompositeScreenProps } from "@react-navigation/core";

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import * as React from "react";

import { RootNavigatorParamList } from "./root-navigator";

export type AuthenticationStackParamList = {
  EmployeeSigninScreen: undefined;
};

export type AuthenticationStackScreenProps<
  Screen extends keyof AuthenticationStackParamList
> = CompositeScreenProps<
  NativeStackScreenProps<AuthenticationStackParamList, Screen>,
  NativeStackScreenProps<RootNavigatorParamList>
>;

const Stack = createNativeStackNavigator<AuthenticationStackParamList>();

export const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EmployeeSigninScreen"
        component={EmployeeSigninScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
