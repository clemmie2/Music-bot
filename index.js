require("dotenv").config();
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { Shoukaku } = require("shoukaku");
const config = require("./config");
const playerManager = require("./structures/PlayerManager");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

client.commands = new Collection();

// Lavalink
const nodes = [{
  name: config.lavalink.name,
  url: config.lavalink.url,
  auth: config.lavalink.auth,
  secure: config.lavalink.secure
}];

client.shoukaku = new Shoukaku(client, nodes, {
  moveOnDisconnect: true,
  resume: true
});

// READY
client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// INTERACTIONS
client.on("interactionCreate", async (i) => {
  if (i.isChatInputCommand()) {
    const cmd = client.commands.get(i.commandName);
    if (cmd) cmd.execute(i, client);
  }

  if (i.isButton()) {
    const player = playerManager.getPlayer(i.guildId);
    const queue = playerManager.getQueue(i.guildId);

    if (!player) return;

    switch (i.customId) {
      case "pause":
        player.setPaused(true);
        return i.reply({ content: "Paused", ephemeral: true });

      case "resume":
        player.setPaused(false);
        return i.reply({ content: "Resumed", ephemeral: true });

      case "skip":
        player.stopTrack();
        return i.reply({ content: "Skipped", ephemeral: true });

      case "stop":
        queue.clear();
        player.disconnect();
        playerManager.delete(i.guildId);
        return i.reply({ content: "Stopped", ephemeral: true });

      case "loop":
        queue.loop = !queue.loop;
        return i.reply({ content: `Loop: ${queue.loop}`, ephemeral: true });
    }
  }
});

client.login(process.env.TOKEN);
