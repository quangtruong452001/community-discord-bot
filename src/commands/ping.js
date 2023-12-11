import { SlashCommandBuilder } from 'discord.js';
// `/ping` and the bot will reply with `Pong!`
export const command = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply('Pong!');
  },
};
