import React, { useState } from "react";

import { SetupStackScreenProps } from "@/navigation/setup-navigator";
import { Button, Input } from "@ui-kitten/components";
import { useStore } from "@/stores";
import { OverlayLoadingIndicator } from "@/components/loading-indicator";
import { Platform } from "react-native";
import { useInputState } from "@/hooks";
import { CentredKeyboardAvoidingView, FlexLayout } from "@/layouts";
import { themeSpacing } from "@/theme/theme-spacings";

export const ManualSetupModal: React.FC<
  SetupStackScreenProps<"ManualSetupModal">
> = () => {
  const configuration = useStore("configuration");

  const [loading, setLoading] = useState(false);

  const subdomain = useInputState();
  const shortToken = useInputState();

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await configuration.initialiseConfiguration(
        subdomain.value,
        shortToken.value
      );

      setLoading(false);
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <FlexLayout>
      <CentredKeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          paddingHorizontal: themeSpacing(3),
          paddingVertical: themeSpacing(3, "height"),
        }}
      >
        <Input
          placeholder="Subdomain"
          {...subdomain}
          style={{ marginVertical: themeSpacing(3, "height") }}
        />

        <Input
          placeholder="Short Code"
          {...shortToken}
          style={{ marginVertical: themeSpacing(3, "height") }}
        />

        <Button
          onPress={handleSubmit}
          status={"primary"}
          style={{ marginVertical: themeSpacing(3, "height") }}
        >
          Submit
        </Button>
      </CentredKeyboardAvoidingView>

      {loading && <OverlayLoadingIndicator />}
    </FlexLayout>
  );
};
