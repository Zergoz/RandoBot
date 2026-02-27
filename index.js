// Import discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Get bot token (password) from the config file
const { token } = require('./config.json');

// Create client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with token
client.login(token);
