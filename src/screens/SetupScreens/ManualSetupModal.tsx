import * as React from "react";

import { SetupStackScreenProps } from "@/navigation/SetupNavigator";
import { Layout, Text } from "@ui-kitten/components";

export const ManualSetupModal: React.FC<
  SetupStackScreenProps<"ManualSetupModal">
> = () => {
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
        Manually Configure
      </Text>
    </Layout>
  );
};
