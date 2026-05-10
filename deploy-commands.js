require("dotenv").config();

const {
  REST,
  Routes,
  SlashCommandBuilder
} = require("discord.js");

const commands = [
  new SlashCommandBuilder()
    .setName("play")
    .setDescription("Play music")
    .addStringOption(option =>
      option
        .setName("query")
        .setDescription("Song name or URL")
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("247")
    .setDescription("Toggle 24/7 mode"),

  new SlashCommandBuilder()
    .setName("queue")
    .setDescription("Show music queue"),

  new SlashCommandBuilder()
    .setName("volume")
    .setDescription("Set player volume")
    .addIntegerOption(option =>
      option
        .setName("amount")
        .setDescription("1-100")
        .setRequired(true)
    )
].map(cmd => cmd.toJSON());

const rest = new REST({
  version: "10"
}).setToken(process.env.TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );

    console.log("Slash commands deployed.");
  } catch (err) {
    console.error(err);
  }
})();
