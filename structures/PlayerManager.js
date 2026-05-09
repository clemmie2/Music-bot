const { GuildWidgetStyle } = require("discord.js");
const Queue = require("./Queue");

class PlayerManager {
    constructor(client) {
        this.player = new Map(); // Map of guildId to player 
        this.queues = new Map(); // Map of guildId to Queue 
    }
}

getQueue(GuildId) {
    if (!this.queues.has(GuildId)) {
        this.queues.set(GuildId, new Queue());
    }
    return this.queues.get(GuildId);
}

getPlayer(GuildId) {
    return this.player.get(GuildId);
}

setPlayer(GuildId, player) {
    this.player.set(GuildId, player);
}

delete(GuildId) {
    this.player.delete(GuildId);
    this.queues.delete(GuildId);
}
}

module.exports = new PlayerManager();