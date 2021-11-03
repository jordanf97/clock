import styled, { css } from "styled-components/native";
import { Layout } from "@ui-kitten/components";
import { KeyboardAvoidingView, View } from "react-native";

const flex = css`
  flex: 1;
`;

const centredFlex = css`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

/**
 * Create some flex layouts to handle commonly occurring, repeated flex patterns
 */

export const FlexLayout = styled(Layout)`
  ${flex}
`;

export const FlexView = styled(View)`
  ${flex}
`;

export const CentredView = styled(View)`
  ${centredFlex}
`;

export const CentredLayout = styled(Layout)`
  ${centredFlex}
`;

export const CentredKeyboardAvoidingView = styled(KeyboardAvoidingView)`
  ${centredFlex}
`;
