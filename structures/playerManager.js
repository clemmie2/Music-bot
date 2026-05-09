const Queue = require("./Queue");

class PlayerManager {
  constructor() {
      this.players = new Map();
      this.queues = new Map();
      this.mode247 = new Map(); // ✅ FIXED NAME
}

    getQueue(guildId) {
        if (!this.queues.has(guildId)) {
        this.queues.set(guildId, new Queue());
}
        return this.queues.get(guildId);
  }

    getPlayer(guildId) {
    return this.players.get(guildId);
 }
    setPlayer(guildId, player) {
    this.players.set(guildId, player);
  }

    delete(guildId) {
    this.players.delete(guildId);
    this.queues.delete(guildId);
    this.mode247.delete(guildId);
  }
}

module.exports = new PlayerManager();