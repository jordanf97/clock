import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";

/**
 * Simple hook for wrapping the camera permission check
 *
 * @returns boolean | null
 */
export const useCameraPermission = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return hasPermission;
};
