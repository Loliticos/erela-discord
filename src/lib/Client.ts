import fetch from "node-fetch";
import { URLSearchParams } from "url";

import { Snowflake } from "discord.js";
import {
  ClientOptions,
  TokenRequestResult,
  User,
  Guild,
  Connection,
} from "./Types";

export class ErelaClient {
  /**
   * The base url for discordapp
   */
  public baseURL = "https://discordapp.com/api";
  /**
   * Client id to be used in the application
   */
  public clientID: Snowflake;
  /**
   * Redirect url from oauth2
   */
  public redirectUri: string;
  /**
   * Client secret
   */
  public clientSecret: string;
  /**
   * Scopes from redirect uri
   */
  public scope: any;
  /**
   * @param options Options to be used in the application
   */
  public constructor(options: ClientOptions) {
    if (typeof options === undefined) {
      throw new TypeError("You must provide valid Client options");
    }

    this.clientID = options.clientID;
    this.redirectUri = options.redirectUri;
    this.scope = options.scope || ["guilds", "identify"];
    this.clientSecret = options.clientSecret;
  }

  public authURL(responseType = "code"): string {
    return `${this.baseURL}/oauth2/authorize?${this.buildQuery({
      client_id: this.clientID,
      redirect_uri: this.redirectUri,
      response_type: responseType,
      scope: this.scope.join("%20"),
    })}`;
  }

  public requestToken(code: any): Promise<TokenRequestResult> {
    const body = new URLSearchParams({
      client_id: this.clientID,
      client_secret: this.clientSecret,
      redirect_uri: this.redirectUri,
      scope: this.scope,
      grant_type: "authorization_code",
      code,
    });

    return fetch(`${this.baseURL}/oauth2/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    }).then((res) => (res.ok ? res.json() : Promise.reject(res)));
  }

  public buildQuery(obj: object, join = "&"): string {
    return obj
      ? Object.entries(obj)
          .map((a) => a.join("="))
          .join(join)
      : "";
  }

  public getUser(access_token: any): Promise<User> {
    return fetch(`${this.baseURL}/users/@me`, {
      headers: {
        "Content-Type": "application/json",
        Authentication: { Bearer: access_token },
      },
    }).then((res: any) => res.json());
  }

  public getUserGuilds(access_token: any): Promise<Guild> {
    return fetch(`${this.baseURL}/users/@me/guilds`, {
      headers: {
        "Content-Type": "application/json",
        Authentication: { Bearer: access_token },
      },
    }).then((res: any) => res.json());
  }

  public getUserConnections(access_token: any): Promise<Connection> {
    return fetch(`${this.baseURL}/users/@me/connections`, {
      headers: {
        "Content-Type": "application/json",
        Authentication: { Bearer: access_token },
      },
    }).then((res: any) => res.json());
  }
}
