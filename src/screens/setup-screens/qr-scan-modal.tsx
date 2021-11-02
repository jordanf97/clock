import * as React from "react";
import { SetupStackScreenProps } from "@/navigation/setup-navigator";
import { Button, Layout, Text } from "@ui-kitten/components";
import { useStore } from "@/stores";
import { observer } from "mobx-react-lite";

export const QrScanModal: React.FC<SetupStackScreenProps<"QrScanModal">> =
  observer((props) => {
    const store = useStore("configuration");
    const subdomain = store.subdomain;

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
          Scan QR Code to configure{subdomain}
        </Text>

        <Button
          onPress={() =>
            store.initialiseConfiguration("test" + store.subdomain, "this")
          }
        >
          Mutate State!
        </Button>
      </Layout>
    );
  });
