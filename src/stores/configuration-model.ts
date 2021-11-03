import { apiService } from "@/services/api/api-service";
import { types, flow } from "mobx-state-tree";
import { RootInstance } from "./root-store";

export type ConfigurationStore = RootInstance["configuration"];

/**
 * A simple store for holding all app configuration state
 */
export const ConfigurationModel = types
  .model({
    subdomain: types.optional(types.string, ""),
    longToken: types.optional(types.string, ""),
    clientId: types.optional(types.string, ""),
  })
  .views((self) => ({
    /**
     * Simple computed property for determining if the app has been configured
     */
    get isConfigured() {
      return (
        Boolean(self.subdomain) &&
        Boolean(self.longToken) &&
        Boolean(self.clientId)
      );
    },
  }))
  .actions((self) => {
    /**
     * Initialise the initial setup of the app after submitting subdomain & shorttoken
     */
    const initialiseConfiguration = flow(function* (
      subdomain: string,
      shortToken: string
    ) {
      apiService.setup(subdomain);
      const response = yield apiService.exchangeShortCode(shortToken);

      if (response.kind !== "ok") {
        throw new Error("An error occurred while exchanging the token");
      }

      self.subdomain = subdomain;
      self.longToken = response.token;
      self.clientId = String(response.client_id);

      return true;
    });

    const reset = () => {
      self.subdomain = "";
      self.clientId = "";
      self.longToken = "";
    };

    return { initialiseConfiguration, reset };
  });
