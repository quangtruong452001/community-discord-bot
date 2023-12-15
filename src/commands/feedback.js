import { SlashCommandBuilder } from 'discord.js';
import axios from 'axios';
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
    const feedback = {
      comment: interaction.options.getString('feedback'),
      discord_userID: interaction.user.id,
      discord_username: interaction.user.username,
      discord_channelID: interaction.channelId,
    };

    axios
      .post(process.env.SERVER, feedback)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    await interaction.reply(
      "Thanks for reaching out! We'll be passing this along to the team directly! Good luck playing the game!"
    );
  },
};
