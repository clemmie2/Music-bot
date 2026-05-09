const playerManager = require("../structures/PlayerManager");
const musicEmbed = require("../ui/musicEmbed");
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require("discord.js");

module.exports = {
  name: "play",
  description: "Play music",

  async execute(interaction, client) {
    const query = interaction.options.getString("query");
    const voice = interaction.member.voice.channel;

    if (!voice)
      return interaction.reply("Join a voice channel first.");

    const player = await client.shoukaku.joinVoiceChannel({
      guildId: interaction.guild.id,
      channelId: voice.id,
      shardId: interaction.guild.shardId
    });

    playerManager.setPlayer(interaction.guild.id, player);

    const queue = playerManager.getQueue(interaction.guild.id);

    // SEARCH SUPPORT
    let result = await client.shoukaku.rest.resolve(
      `ytsearch:${query}`
    );

    if (!result.tracks.length) {
      result = await client.shoukaku.rest.resolve(
        `spsearch:${query}`
      );
    }

    if (!result.tracks.length)
      return interaction.reply("No results found.");

    const track = result.tracks[0];

    queue.add(track);

    if (!queue.current) {
      playNext(player, queue, interaction, client);
    }

    return interaction.reply(`Added: **${track.info.title}**`);
  }
};

async function playNext(player, queue, interaction, client) {
  const track = queue.next();
  if (!track) return;

  player.playTrack({ track: track.encoded });

  const embed = musicEmbed(track, queue);

  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId("pause").setLabel("Pause").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("resume").setLabel("Resume").setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId("skip").setLabel("Skip").setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId("stop").setLabel("Stop").setStyle(ButtonStyle.Danger),
    new ButtonBuilder().setCustomId("loop").setLabel("Loop").setStyle(ButtonStyle.Secondary)
  );

  const msg = await interaction.channel.send({
    embeds: [embed],
    components: [row]
  });

  player.once("end", () => {
    playNext(player, queue, interaction, client);
  });
}