module.exports = {
    name: "play",
    description: "Play music Using Lavalink",

    async execute(interaction) {
        const query = interaction.options.getString("query");

        const player= await client.shoukaku.joinVoiceChannel({
            guildid: interaction.guild.id,
            channelid: interaction.member.voice.channel.id,
            shardid: interaction.guild.shardid
        });

        const result = await client.shoukaku.rest.resolve(query);

        if(!result?.tracks?.length)
             return interaction.reply("No results found.");

        player.play(result.tracks[0]);

        player.playTrack({ track: track track.encoded });

        interaction.reply('Now playing: **${track.info.title}**');
}
};