const manager = require("../structures/PlayerManager");

module.exports = {
  name: "volume",

  async execute(interaction) {
    const amount =
      interaction.options.getInteger(
        "amount"
      );

    if (amount < 1 || amount > 100) {
      return interaction.reply(
        "Volume must be 1-100."
      );
    }

    const player =
      manager.getPlayer(
        interaction.guild.id
      );

    if (!player) {
      return interaction.reply(
        "No active player."
      );
    }

    await player.setGlobalVolume(
      amount
    );

    return interaction.reply(
      `🔊 Volume set to ${amount}%`
    );
  }
};
