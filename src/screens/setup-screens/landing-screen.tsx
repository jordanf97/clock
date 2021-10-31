import * as React from "react";
import { View } from "react-native";

import { Layout, Button, Icon, useTheme, Text } from "@ui-kitten/components";
import { SetupStackScreenProps } from "@/navigation/setup-navigator";

export const LandingScreen: React.FC<SetupStackScreenProps<"LandingScreen">> =
  ({ navigation }) => {
    const theme = useTheme();
    return (
      <Layout
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View>
          <Icon
            name={"lock-clock"}
            style={{
              height: 100,
              alignSelf: "center",
              tintColor: theme["brand-action-500"],
            }}
          />

          <Text style={{ fontSize: 45, alignSelf: "center", marginBottom: 25 }}>
            Clock
          </Text>

          <View style={{ paddingVertical: 15 }}>
            <Button
              size={"mega"}
              onPress={() => navigation.navigate("QrScanModal")}
            >
              Scan QR Code
            </Button>
          </View>

          <View style={{ paddingVertical: 15 }}>
            <Button
              size={"mega"}
              onPress={() => navigation.navigate("ManualSetupModal")}
            >
              Basic Setup
            </Button>
          </View>
        </View>
      </Layout>
    );
  };
