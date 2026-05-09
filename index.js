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
const nodes = [
  {
    name: config.lavalink.name,
    url: config.lavalink.url,
    auth: config.lavalink.auth,
    secure: config.lavalink.secure
  }
];

client.shoukaku = new Shoukaku(client, nodes, {
  moveOnDisconnect: true,
  resume: true
});

// Ready
client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Interaction handler (commands + buttons)
client.on("interactionCreate", async (interaction) => {
  if (interaction.isChatInputCommand()) {
    const cmd = client.commands.get(interaction.commandName);
    if (cmd) cmd.execute(interaction, client);
  }

  if (interaction.isButton()) {
    const { customId, guildId } = interaction;

    const player = playerManager.getPlayer(guildId);
    const queue = playerManager.getQueue(guildId);

    if (!player) return;

    switch (customId) {
      case "pause":
        player.setPaused(true);
        return interaction.reply({ content: "Paused ⏸", ephemeral: true });

      case "resume":
        player.setPaused(false);
        return interaction.reply({ content: "Resumed ▶", ephemeral: true });

      case "skip":
        player.stopTrack();
        return interaction.reply({ content: "Skipped ⏭", ephemeral: true });

      case "stop":
        queue.clear();
        player.stopTrack();
        player.disconnect();
        playerManager.delete(guildId);
        return interaction.reply({ content: "Stopped ⛔", ephemeral: true });

      case "loop":
        queue.loop = !queue.loop;
        return interaction.reply({ content: `Loop: ${queue.loop}`, ephemeral: true });
    }
  }
});

client.login(process.env.TOKEN);