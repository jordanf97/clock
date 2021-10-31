import {
  IconPack,
  IconProps,
  IconProvider as IconProviderInterface,
} from "@ui-kitten/components";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

export type AvailableIcons = keyof typeof Icon.glyphMap;

const createIconsMap = () => {
  return new Proxy(
    {},
    {
      get(target, name: string) {
        return IconProvider(name);
      },
    }
  );
};

const IconProvider = (name: string): IconProviderInterface<IconProps> => ({
  toReactElement: (props) => MaterialIcon({ name, ...props }),
});

interface MaterialIconProps {
  name: AvailableIcons;
  style: { tintColor: string } & ViewStyle;
}

const MaterialIcon = ({
  name,
  style,
}: MaterialIconProps): React.ReactElement => {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style || {});

  return (
    <Icon
      name={name}
      size={height as number | undefined}
      color={tintColor}
      style={iconStyle}
    />
  );
};

const MaterialIconsPack: IconPack<IconProps> = {
  name: "material",
  icons: createIconsMap(),
};

export default MaterialIconsPack;
