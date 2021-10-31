export interface ApiConfig {

  /**
   * Milliseconds before the request should timeout
   */
  timeout: number;
}

export const API_CONFIG: ApiConfig = {
  timeout: 30000, // 30 seconds
};
