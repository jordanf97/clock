import React from "react";

import useCachedResources from "@/hooks/use-cached-resources";
import { RootNavigator } from "@/navigation";
import { ThemeProvider } from "@/theme";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    );
  }
}
