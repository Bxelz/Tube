// help.js

const { timeStamp } = require('console');

module.exports = {
    data: {
      name: 'help',
      description: 'Get information about Tube and its features.',
    },
    async execute(interaction, prefix) {
      const { EmbedBuilder } = require('discord.js');
  
      const embed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('Tube Help & Info')
      .setURL('https://discord.com/oauth2/authorize?client_id=1185021032856309770')
      .setDescription('As of \`12/04/2024\`, Tube is still under mass development. Please expect bugs and problems while using certain tools. ~ <@787451415047700480>')
      .setThumbnail('https://i.imgur.com/7fpT710.png')
      .addFields(
          { name: 'Prefix:', value: `\`${prefix}\`` },

          { name: 'Commands', value: '`6`' },

          { name: 'Client ID', value: `\`${interaction.client.user.id}\`` },
      )
      .setTimestamp()
      .setFooter({ text: 'Powered By Tube', iconURL: 'https://i.imgur.com/7fpT710.png' });
  
      interaction.reply({ embeds: [embed] });
    },
  };
  