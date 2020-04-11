import {
  User,
  ClientOptions,
  TokenRequestResult,
  Guild,
  Connection,
} from "./src/lib/Types";

declare class ErelaClient {
  constructor(options: ClientOptions);
  requestToken(code: string): Promise<TokenRequestResult>;
  getUser(access_token: string): Promise<User>;
  getUserGuilds(access_token: string): Promise<Guild[]>;
  getUserConnections(access_token: string): Promise<Connection[]>;
}

export = ErelaClient;
