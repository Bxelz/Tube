const { Client, GatewayIntentBits } = require('discord.js');
const colors = require('colors');
const pogger = require('pogger');
const { token, prefix } = require('./src/Config/config.json'); // Adjusted import path
const fs = require('fs');
const { ActivityType } = require('discord.js')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

// Read all command files from the Commands folder (relative to the current file)
const commandFiles = fs.readdirSync('./src/Commands').filter(file => file.endsWith('.js')); // Adjusted path

client.login("MTE4NTAyMTAzMjg1NjMwOTc3MA.Gcuuol.CxTiIkj9lH6aj2FNWtVPRMNyZ3lst3rIRqNDW4");

client.on("ready", () => {
  client.user.setStatus('offline');
  pogger.success(`${client.user.tag} (${client.user.id}) is now Online!`.green);
  pogger.warning("Created By KBDEV".underline.red);
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  // Find the command file based on the command name
  const commandFile = commandFiles.find(file => file.split('.')[0] === commandName);
  if (!commandFile) return;

  // Execute the command
  const command = require(`./src/Commands/${commandFile}`); // Adjusted path
  try {
    // Pass the prefix variable as an argument to the execute function
    await command.execute(interaction, prefix);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command.', ephemeral: true });
  }
});
