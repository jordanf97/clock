import * as React from "react";
import { SetupStackScreenProps } from "@/navigation/setup-navigator";
import { Layout, Text } from "@ui-kitten/components";
import * as Linking from "expo-linking";

export const QrScanModal: React.FC<SetupStackScreenProps<"QrScanModal">> =
  () => {
    Linking.getInitialURL().then(console.log);
    return (
      <Layout
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 50, textAlign: "center" }}>
          Scan QR Code to configure
        </Text>
      </Layout>
    );
  };
