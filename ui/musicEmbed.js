const { EmbedBuilder } = require("discord.js");

function MusicEmbed(track, queue) {
    return new EmbedBuilder()
    .setTitle("Now Playing🎵")
    .setDescription(`[${track.title}](${track.url})`)
    .addFields(
        { name: "Author", value: track.info.author || "Unknown", inline: true },
        { name: "Duration", value: `${track.info.length / 1000}s`, inline: true },
        { name: "Queue Length", value: `${queue.tracks.length} tracks`, inline: true },
        { name: "Loop", value: queue.loop ? "ON" : "OFF", inline: true }
    )
    .setColor("Blue")
}

module.exports = MusicEmbed;