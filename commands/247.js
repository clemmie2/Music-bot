const manager = require("../structures/PlayerManager");

module.exports = {
    name: "247",
    description: "Toggles 24/7 mode for the current guild."

    async execute(interaction) {
        const state = manager.247.get(interaction.guild.id) || false;

        manager.247.set(interaction.guild.id, !state);

        interaction.reply(interaction.guild.id, !state);

        interaction.reply(`24/7 mode: ${!state ? "ON" : "OFF"}`);
    }
};