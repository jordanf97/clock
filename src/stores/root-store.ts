import { Instance, onSnapshot, types } from "mobx-state-tree";
import { UserModel } from "./user-model";
import { ConfigurationModel } from "./configuration-model";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type RootInstance = Instance<typeof rootStore>;

/**
 * Define the root store structure with all
 * sub stores.
 */
export const RootStore = types
  .model({
    users: types.map(UserModel),
    activeUser: types.maybeNull(UserModel),
    configuration: ConfigurationModel,
  })
  .actions((self) => {
    function setActiveUser(id: string, passcode: string) {
      const user = self.users.get(id);

      if (user && user.verifyPasscode(passcode)) {
        self.activeUser = user;

        return true;
      }

      return false;
    }

    return { setActiveUser };
  });

/**
 * Initialise the root store with all default store values
 */
export const rootStore = RootStore.create({
  configuration: ConfigurationModel.create(),
});

// todo: probably going to be too heavy and slow
onSnapshot(rootStore, (snapshot) =>
  AsyncStorage.setItem("@state", JSON.stringify(snapshot))
);
