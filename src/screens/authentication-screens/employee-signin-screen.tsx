import * as React from "react";

import { SetupStackScreenProps } from "@/navigation/setup-navigator";
import { Button, Text } from "@ui-kitten/components";
import { useStore } from "@/stores";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CentredLayout } from "@/layouts";
import { themeSpacing } from "@/theme/theme-spacings";

export const EmployeeSigninScreen: React.FC<
  SetupStackScreenProps<"ManualSetupModal">
> = () => {
  const configuration = useStore("configuration");
  const handleLogout = () => {
    AsyncStorage.clear();
    configuration.reset();
  };

  return (
    <CentredLayout
      style={{
        padding: themeSpacing(3),
      }}
    >
      <Text
        style={{ fontSize: themeSpacing(4, "height"), textAlign: "center" }}
      >
        Welcome you are configured! {configuration.subdomain}
      </Text>

      <Button onPress={handleLogout}>Logout</Button>
    </CentredLayout>
  );
};
