const manager = require("../structures/PlayerManager");

module.exports = {
  name: "queue",

  async execute(interaction) {
    const queue = manager.getQueue(
      interaction.guild.id
    );

    if (!queue.tracks.length) {
      return interaction.reply(
        "Queue is empty."
      );
    }

    const songs = queue.tracks
      .slice(0, 10)
      .map((track, i) =>
        `${i + 1}. ${track.info.title}`
      )
      .join("\n");

    return interaction.reply({
      content:
        `🎵 Current Queue:\n\n${songs}`
    });
  }
};
