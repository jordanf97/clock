import * as React from "react";

import { SetupStackScreenProps } from "@/navigation/setup-navigator";
import { Layout, Text } from "@ui-kitten/components";
import { useStore } from "@/stores";

export const ManualSetupModal: React.FC<
  SetupStackScreenProps<"ManualSetupModal">
> = () => {
  const configuration = useStore("configuration");

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
        Manually Configure {configuration.subdomain}
      </Text>
    </Layout>
  );
};
