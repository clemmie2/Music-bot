require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const createShoukaku = require("../lavalink/node");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ]
});

client.commands = new Collection();

//Lavalink
client.shoukaku = createShoukaku(Client);

//Ready Event
client.once("ready", () => {
    console.log('Logged in as ${Client.user.tag}');
});

//Simple command handler (basic)
client.on("InteractionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
});

client.login(process.env.TOKEN);