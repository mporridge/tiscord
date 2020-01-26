"use strict";
const Client = require("./src/Client");

function discord(token, options) {
    /* Discord Node client */
    return new Client(token, options)
}

discord.Client = Client;


module.exports = discord;
