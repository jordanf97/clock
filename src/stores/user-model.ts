import { types } from "mobx-state-tree";

/**
 * A simple store for storing & caching all app users
 */
export const UserModel = types
  .model({
    id: types.identifier,
    name: types.string,
    email: types.string,
    passcode: types.string,
  })
  .actions(() => {
    function verifyPasscode(passcode: string) {
      return true;
    }

    return { verifyPasscode };
  });
