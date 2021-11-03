import normalize from "react-native-normalize";

type SpacingMap = typeof spacingMap;

/**
 * Implement 8px grid
 */
const spacingMap = {
  0: 0,
  1: 4,
  2: 8,
  3: 16,
  4: 24,
  5: 32,
  6: 40,
  7: 48,
  8: 56,
  9: 64,
  10: 72,
  11: 80,
};

/**
 * Implement normalisation of 8px spacing grid for responsivity
 * across different device sizes
 */
export const themeSpacing = (
  key: keyof SpacingMap,
  based: "height" | "width" = "width"
): number => {
  const size = spacingMap[key];

  return normalize(size, based);
};
