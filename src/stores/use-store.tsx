import React from "react";
import { rootStore } from ".";
import { RootInstance } from "./root-store";

/**
 * A simple hook for utilising one of the configured stores
 * within a component through the context API.
 *
 * Will return a desired store based on it's name & is fully typed.
 *
 * @param storeName
 * @returns RootInstance[T]
 */
export const useStore = <T extends string & keyof RootInstance>(
  storeName: T
): RootInstance[T] => {
  const store = React.useContext(RootStoreContext);

  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }

  const desiredStore = store[storeName];

  if (!storeName || typeof storeName !== "string" || !desiredStore) {
    throw new Error("Could not find that store");
  }

  return desiredStore;
};

/**
 * A simple hook for returning the global store.
 *
 * NB: someone less noob at TypeScript might be able to combine
 * this hook with the above & still have it fully typed.
 *
 * @returns RootInstance
 */
export const useRootStore = (): RootInstance => {
  const store = React.useContext(RootStoreContext);

  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }

  return store;
};

/**
 * Create the React Context for sharing throughout the component tree
 */
export const RootStoreContext = React.createContext<RootInstance>(rootStore);

/**
 * Lightweight wrapper around root store context
 *
 * @param props
 * @returns
 */
export const RootStoreProvider: React.FC = ({ children }) => (
  <RootStoreContext.Provider value={rootStore}>
    {children}
  </RootStoreContext.Provider>
);
