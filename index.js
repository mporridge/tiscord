"use strict";
const Webhook = require("./src/webhook/webhook")
const Client = require("./src/Client");

function discord(token, options) {
    /* Discord Node client */
    return new Client(token, options)
}

discord.Client = Client;
discord.Webhook = webhook;

module.exports = discord;
