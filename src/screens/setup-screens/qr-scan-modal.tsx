import * as React from "react";
import { SetupStackScreenProps } from "@/navigation/setup-navigator";
import { useStore } from "@/stores";
import { observer } from "mobx-react-lite";
import { BarcodeScanner } from "@/components/barcode-scanner";

import { OverlayLoadingIndicator } from "@/components/loading-indicator";
import { FlexLayout } from "@/layouts";

type BarcodeResponse = {
  subdomain: string;
  token: string;
};

export const QrScanModal: React.FC<SetupStackScreenProps<"QrScanModal">> =
  observer(({ navigation }) => {
    const store = useStore("configuration");
    const [loading, setLoading] = React.useState(false);

    const handleBarcodeScan = async (data: string) => {
      setLoading(true);

      try {
        const parsedData = JSON.parse(data) as BarcodeResponse;

        await store.initialiseConfiguration(
          parsedData.subdomain,
          parsedData.token
        );
        setLoading(false);
      } catch (err) {
        alert("Something went wrong");
        setLoading(false);
        navigation.goBack();
      }
    };

    return (
      <FlexLayout>
        <BarcodeScanner onScan={handleBarcodeScan} />

        {loading && <OverlayLoadingIndicator />}
      </FlexLayout>
    );
  });
