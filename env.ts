import Constants from "expo-constants";

enum AvailableEnvironments {
  dev = "dev",
  prod = "prod",
}

type Environment = {
  API_URL?: string;
  env: AvailableEnvironments;
};

const environments = {
  dev: {},

  prod: {},
};

const common = {};

const currentEnvironment = ((): AvailableEnvironments => {
  switch (Constants?.manifest?.releaseChannel) {
    case "master":
    case "default":
      return AvailableEnvironments.prod;
    default:
      return AvailableEnvironments.dev;
  }
})();

const env: Environment = {
  ...common,
  ...environments[currentEnvironment],
  env: currentEnvironment,
};

export default env;
