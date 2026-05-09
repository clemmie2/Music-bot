const manager = require("../structures/PlayerManager");

module.exports = {
  name: "247",
    description: "Toggle 24/7 mode",

      async execute(interaction) {
        const guildId = interaction.guild.id;

        const state = manager.mode247.get(guildId) || false;

        manager.mode247.set(guildId, !state);

        return interaction.reply({
        content: `24/7 mode: ${!state ? "ON" : "OFF"}`
    });
  }
  };