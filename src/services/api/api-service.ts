import { ConfigurationStore } from "@/stores/configuration-model";
import { ApisauceInstance, create } from "apisauce";
import { buildUriFromSubdomain } from "../../../env";
import { ApiConfig, API_CONFIG } from "./api-config";
import { getGeneralApiProblem } from "./api-problem";
import * as Types from "./api.types";

/**
 * Manages handling all API requests
 */
class ApiService {
  /**
   * The underlying apisauce instance which performs the requests
   */
  private apisauce!: ApisauceInstance;

  /**
   * Configurable API options
   */
  private config: ApiConfig;

  /**
   * The prefix for the base URI of the API
   */
  private API_PREFIX = "/api/clock";

  /**
   * Creates the API Service
   *
   * @param config
   * @param eager
   */
  constructor(config: ApiConfig = API_CONFIG) {
    this.config = config;
  }

  /**
   * Hydrate the apiService from the intial app load
   *
   * @param configurationStore
   */
  hydrate(configurationStore: ConfigurationStore) {
    if (configurationStore.subdomain) {
      this.setup(configurationStore.subdomain);
    }

    if (configurationStore.longToken) {
      this.setAuthentication(configurationStore.longToken);
    }
  }

  /**
   * Create the underlying apisauce instance, this should be done early
   */
  setup(subdomain: string) {
    this.apisauce = create({
      baseURL: buildUriFromSubdomain(subdomain) + "/" + this.API_PREFIX,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    });
  }

  /**
   * Once the short code has been exchanged we can configure
   * authentication
   *
   * @param longToken
   */
  private setAuthentication(longToken: string) {
    this.apisauce.setHeader("Authorization", longToken);
  }

  /**
   * Fetch an access token using a short code.
   *
   * TODO: why is this using a GET request?
   *
   * @param code
   * @param code_verifier
   */
  async exchangeShortCode(shortCode: string): Promise<Types.TokenApiResponse> {
    const response = await this.apisauce.get<Types.TokenInterface>(
      `/exchange-token/${shortCode}`
    );

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);

      if (problem) return problem;
    }

    if (!response.data) {
      throw new Error("Data empty when retrieving access token");
    }

    this.setAuthentication(response.data.token);

    return {
      kind: "ok",
      token: response.data.token,
      client_id: response.data.client_id,
    };
  }
}

export const apiService = new ApiService();
