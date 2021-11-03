import * as React from "react";
import { Platform, View } from "react-native";

import { Button, Icon, useTheme, Text } from "@ui-kitten/components";
import { SetupStackScreenProps } from "@/navigation/setup-navigator";
import { CentredLayout } from "@/layouts";
import { themeSpacing } from "@/theme/theme-spacings";

export const LandingScreen: React.FC<SetupStackScreenProps<"LandingScreen">> =
  ({ navigation }) => {
    const theme = useTheme();

    return (
      <CentredLayout>
        <View>
          <Icon
            name={"lock-clock"}
            style={{
              height: themeSpacing(11, "height"),
              alignSelf: "center",
              tintColor: theme["brand-action-500"],
            }}
          />

          <Text
            style={{
              fontSize: themeSpacing(7, "height"),
              alignSelf: "center",
              marginBottom: themeSpacing(4, "height"),
            }}
          >
            Clock
          </Text>

          {Platform.OS !== "web" && (
            <View style={{ paddingVertical: themeSpacing(3, "height") }}>
              <Button
                size={"mega"}
                onPress={() => navigation.navigate("QrScanModal")}
              >
                Scan QR Code
              </Button>
            </View>
          )}

          <View style={{ paddingVertical: themeSpacing(3, "height") }}>
            <Button
              size={"mega"}
              onPress={() => navigation.navigate("ManualSetupModal")}
            >
              Basic Setup
            </Button>
          </View>
        </View>
      </CentredLayout>
    );
  };
