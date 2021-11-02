import { rootStore } from "@/stores";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { applySnapshot } from "mobx-state-tree";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app.
  // be careful doing expensive operations in here as it will block the rendering
  // of the app.
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...MaterialIcons.font,
          "space-mono": require("../../assets/fonts/SpaceMono-Regular.ttf"),
        });

        // Restore state on initialisation, todo: may be too heavy to leave this here
        await AsyncStorage.getItem("@state").then((val) => {
          if (val) {
            applySnapshot(rootStore, JSON.parse(val));
          }
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
