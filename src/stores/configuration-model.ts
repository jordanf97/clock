import { types } from "mobx-state-tree";

/**
 * A simple store for holding all app configuration state
 */
export const ConfigurationModel = types
  .model({
    subdomain: types.optional(types.string, ""),
    longToken: types.optional(types.string, ""),
  })
  .actions((self) => {
    function initialiseConfiguration(subdomain: string, longToken: string) {
      self.subdomain = subdomain;
      self.longToken = longToken;
    }

    return { initialiseConfiguration };
  });
