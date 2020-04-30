import { Snowflake } from "discord.js";

/**
 * Client options
 * */
export interface ClientOptions {
    /**
   * The client id to be used in the application
   */
    clientID: Snowflake | string;
    /**
   * Redirect uri from oauth2
   */
    redirectUri: string;
    /**
   * Scopes from redirect uri
   */
    scope?: string | "guilds identify";
    /**
   * Client secret
   */
    clientSecret: string;
}

/**
 * Token Request Result
 */

export interface TokenRequestResult {
    /**
   * Token to be returned
   */
    access_token: string;
    /**
   * Token Type
   */
    token_type: string;
    /**
   * Date that this token expires
   */
    expires_in: number;
    /**
   * The refresh token
   */
    refresh_token: string;
    /**
   * Scopes
   */
    scope: string;
}

/**
 * User Result Format
 */

export interface User {
    /**
   * User ID
   */
    id: string;
    /**
   * User avatar icon
   */
    avatar: string | null | undefined;
    /**
   * Username from the user
   */
    username: string;
    /**
   * User Discrminator. Ex.: 1868
   */
    discriminator: string;
    /**
   * User is a bot
   */
    bot?: boolean;
    /**
   * User has an email
   */
    email?: string;
    /**
   * User has flags
   */
    flags?: number;
    /**
   * User Locale
   */
    locale?: string;
    /**
   * User is verified
   */
    verified?: boolean;
    /**
   * User has mfa enabled
   */
    mfa_enabled?: string;
    /**
   * User is Premium
   */
    premium_type?: number;
}

export interface Guild {
    /**
   * Guild ID
   */
    id: string;
    /**
   * Guild Name
   */
    name: string;
    /**
   * Guild icon URL
   */
    icon: string | null | undefined;
    /**
   * Owner from the guild. Returns an user
   */
    owner: boolean;
    /**
   * Features that the guild has
   */
    features: string[];
    /**
   * User permissions in this guild
   */
    permissions?: number;
}

interface Integration {
    id: string;
    user: User;
    name: string;
    type: string;
    account: {
        id: string;
        name: string;
    };
    enabled: boolean;
    role_id: string;
    syncing: boolean;
    synced_at: string;
    expire_behavior: number;
    expire_grace_period: number;
}

export interface Connection {
    id: string;
    type: string;
    name: string;
    revoked?: string;
    verified: string;
    visibility: string;
    friend_sync: boolean;
    show_activity: boolean;
    integrations?: Integration[];
}
