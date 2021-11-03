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
  dev: {
    API_URL: "http://192.168.1.109:8080",
  },

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

export const buildUriFromSubdomain = (subdomain: string) => {
  if (subdomain === "local" && env.API_URL) {
    return env.API_URL;
  }

  return `https://${subdomain}.foundu.com.au`;
};

export default env;
