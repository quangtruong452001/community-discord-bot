import { SlashCommandBuilder } from 'discord.js';

export const command = {
  data: new SlashCommandBuilder()
    .setName('feedback')
    .setDescription('Send feedback to the bot developer')
    .addStringOption((option) =>
      option
        .setName('feedback')
        .setDescription('Your feedback')
        .setRequired(true)
    ),
  async execute(interaction) {
    const feedback = interaction.options.getString('feedback');
    console.log(`Feedback received: ${feedback}`);
    await interaction.reply(
      'Thanks for reaching out! We\'ll be passing this along to the team directly! Good luck playing the game!'
    );
  },
};
