import * as React from "react";
import { SetupStackScreenProps } from "@/navigation/SetupNavigator";
import { Layout, Text } from "@ui-kitten/components";

export const QrScanModal: React.FC<SetupStackScreenProps<"QrScanModal">> =
  () => {
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
