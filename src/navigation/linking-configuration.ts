import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { RootNavigatorParamList } from "./root-navigator";

export const LinkingConfiguration: LinkingOptions<RootNavigatorParamList> = {
  prefixes: [Linking.makeUrl("/")],

  config: {
    screens: {
      SetupNavigator: {
        screens: {
          LandingScreen: "LandingScreen",
          QrScanModal: "QrScanModal",
          ManualSetupModal: "ManualSetupModal",
        },
      },
      NotFound: "*",
    },
  },
};
