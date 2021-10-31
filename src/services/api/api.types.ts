import { GeneralApiProblem } from "./api-problem";

export interface TokenInterface {
  token: string;
  client_id: number;
}

export type GenericApiResponse = { kind: "ok" } | GeneralApiProblem;

export type TokenApiResponse =
  | { kind: "ok"; token: string; client_id: number }
  | GeneralApiProblem;
