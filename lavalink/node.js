const { Shoukaku } = require("shoukaku");
const config = require("../config");
const { Client } = require("discord.js");

function createShoukaku(Client) {
    const node: [
        {
        name: config.lavalink.name
        url: config.lavalink.url,
        auth: config.lavalink.auth,
        secure: config.lavalink.secure
    }
]

    const shoukaku = new Shoukaku(client, nodes {
        moveOnDisconnect: true,
        resume: true,
        resumeTimeout: 30,
        reconnectTries: 5
    });

    shoukaku.on("ready", (name) => {
        console.log('Lavalink node ready: ${name}');
    });

    shoukaku.on("error", (_, error => {
        console.error("Lavalink error:", error);
    });

    return shoukaku;
}

module.exports = createShoukaku;