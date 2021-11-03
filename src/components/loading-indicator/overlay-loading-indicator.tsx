import { CentredView } from "@/layouts";
import React from "react";
import { StyleSheet, View } from "react-native";
import { LoadingIndicator as _LoadingIndicator } from "./loading-indicator";

/**
 * Simple component responsible for covering entire screen with an overlay & loader
 */
export const OverlayLoadingIndicator: React.FC<any> = ({
  LoadingIndicator = _LoadingIndicator,
}) => (
  <View style={StyleSheet.absoluteFillObject}>
    <CentredView
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <LoadingIndicator />
    </CentredView>
  </View>
);
