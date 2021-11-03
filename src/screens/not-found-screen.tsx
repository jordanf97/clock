import { RootNavigatorScreenProps } from "@/navigation/root-navigator";
import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "@ui-kitten/components";
import { CentredLayout } from "@/layouts";
import styled from "styled-components/native";
import { themeSpacing } from "@/theme/theme-spacings";

export const NotFoundScreen: React.FC<RootNavigatorScreenProps<"NotFound">> = ({
  navigation,
}) => {
  const TitleText = styled(Text)`
    font-size: ${themeSpacing(4)}px;
    font-weight: bold;
  `;

  return (
    <CentredLayout style={{ padding: themeSpacing(4) }}>
      <TitleText>This screen doesn't exist.</TitleText>

      <TouchableOpacity
        onPress={() => navigation.replace("SetupNavigator")}
        style={{ marginTop: themeSpacing(3), paddingVertical: themeSpacing(3) }}
      >
        <Text category={"s1"} status={"primary"}>
          Go to home screen!
        </Text>
      </TouchableOpacity>
    </CentredLayout>
  );
};
