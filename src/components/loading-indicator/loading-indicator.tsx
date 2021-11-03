import React from "react";
import { View } from "react-native";
import { Spinner, useTheme } from "@ui-kitten/components";
import { themeElevations } from "@/theme";
import { themeSpacing } from "@/theme/theme-spacings";

/**
 * Simple wrapper around Kitten UI spinner for
 * representing loading states
 *
 * TODO: implement normalisation on spacings + consider theme constraints
 */
export const LoadingIndicator: React.FC = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        borderRadius: themeSpacing(1, "height"),
        paddingHorizontal: themeSpacing(3, "width"),
        paddingVertical: themeSpacing(3, "height"),
        backgroundColor: theme["custom-background"],
        ...themeElevations.DP6,
      }}
    >
      <Spinner status="primary" />
    </View>
  );
};
