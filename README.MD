[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/erela-discord)
[![npm downloads](https://img.shields.io/npm/dt/erela-discord.svg?maxAge=3600)](https://www.npmjs.com/package/erela-discord)
[![NPM version](https://badge.fury.io/js/erela-discord.svg)](http://badge.fury.io/js/erela-discord)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![dependencies Status](https://david-dm.org/Loliticos/erela-discord/status.svg)](https://david-dm.org/Loliticos/erela-discord)
[![NPM](https://nodei.co/npm/erela-discord.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/erela-discord/)

# Erela Discord

A simple and easy to use oauth2 discord helper.

## Installation

```bash
# Using yarn
yarn add erela-discord

# Using npm
npm install erela-discord
```

# Methods

## Client

```javascript
const { ErelaClient } = require("erela-discord");

const options = {
  clientID = "12345678910", // Client ID, that's pretty obvious
  redirectUri = "http://localhost/8080/auth", // Set it on https://discordapp.com/developers/applications/bot_id/oauth2
  scope = "guilds identify", // Default to "guilds identify", no need to use this option if you're not changing it
  clientSecret = "Client Secret" // Your bot client secret
};

const Connection = new ErelaClient(options);
```

## authURL()

```javascript
const { ErelaClient } = require("erela-discord");

const Connection = new ErelaClient("options");

const authURL = Connection.authURL(); // Will return the oauth2 connection url
```

## requestToken(access_token)

access_token: OAuth token

```javascript
const { ErelaClient } = require("erela-discord");

const Connection = new ErelaClient("options");

const access_token = "2qRZcUqUa9816RVnnEKRpzOL2CvHBgF";

Connection.requestToken(access_token).then(console.log);

// If the request was succesful
/*
    {
      "access_token": "6qrZcUqja7812RVdnEKjpzOL4CvHBFG",
      "token_type": "Bearer",
      "expires_in": 604800,
      "refresh_token": "D43f5y0ahjqew82jZ4NViEr2YafMKhue",
      "scope": "identify guilds"
    }
*/
```

## getUser(access_token)

access_token: Authentication token, get one by `requestToken()`

```javascript
const { ErelaClient } = require("erela-discord");

const Connection = new ErelaClient("options");

const { access_token } = Connection.requestToken(
  "2qRZcUqUa9816RVnnEKRpzOL2CvHBgF"
);

Connection.getUser(access_token).then(console.log);

/*
  {
    username: '1868 Loliticos',
    locale: 'pt-BR',
    mfa_enabled: false,
    flags: 128,
    avatar: '8342729096ea3675442027381ff50dfe',
    discriminator: '1868',
    id: '532294395655880705'
  }
*/
```

## getUserGuilds(access_token)

access_token: Authentication token, get one by `requestToken()`

```javascript
const { ErelaClient } = require("erela-discord");

const Connection = new ErelaClient("options");

const { access_token } = Connection.requestToken(
  "2qRZcUqUa9816RVnnEKRpzOL2CvHBgF"
);

Connection.getUserGuilds(access_token).then(console.log);

/*
  {
    "id": "674295547024244767",
    "name": "1868 Loliticos",
    "icon": "8342729096ea3675442027381ff50dfe",
    "owner": true,
    "permissions": 36953089
  }
*/
```

## getUserConnections(access_token)

access_token: Authentication token, get one by `requestToken()`

```javascript
const { ErelaClient } = require("erela-discord");

const Connection = new ErelaClient("options");

const { access_token } = Connection.requestToken(
  "2qRZcUqUa9816RVnnEKRpzOL2CvHBgF"
);

Connection.getUserConnections(access_token).then(console.log);

/*
  {
    [
      {
        verified: true,
        name: 'epicusername',
        show_activity: true,
        friend_sync: false,
        type: 'twitch',
        id: '31244565',
        visibility: 1
      }
    ]
  }
*/
```
