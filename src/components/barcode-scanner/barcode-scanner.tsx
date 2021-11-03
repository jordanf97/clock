import React from "react";
import { StyleSheet } from "react-native";
import { BarCodeScannedCallback, BarCodeScanner } from "expo-barcode-scanner";
import { Text } from "@ui-kitten/components";
import {
  LoadingIndicator,
  OverlayLoadingIndicator,
} from "../loading-indicator";
import { useCameraPermission } from "@/hooks";
import { CentredView } from "@/layouts";

interface Props {
  onScan: (barcodeData: string) => void;
}

/**
 * Simple component for wrapping around expo's barcode scanner
 *
 * TODO: abstract permission render out when implementing other camera components
 */
export const BarcodeScanner: React.FC<Props> = ({ onScan }) => {
  const hasCameraPermission = useCameraPermission();
  const [scanned, setScanned] = React.useState(false);

  const handleBarCodeScanned: BarCodeScannedCallback = ({ data }) => {
    setScanned(true);

    onScan(data);
  };

  return (
    <CentredView>
      {!hasCameraPermission ? (
        <>
          {hasCameraPermission === null && (
            <>
              <OverlayLoadingIndicator
                LoadingIndicator={() => (
                  <>
                    <Text style={{ marginBottom: 25 }}>
                      Requesting camera permission
                    </Text>

                    <LoadingIndicator />
                  </>
                )}
              />
            </>
          )}

          {hasCameraPermission === false && (
            <Text>Please allow camera access to continue</Text>
          )}
        </>
      ) : (
        <>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        </>
      )}
    </CentredView>
  );
};
