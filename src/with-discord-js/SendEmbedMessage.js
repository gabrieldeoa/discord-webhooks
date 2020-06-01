import Discord from 'discord.js';

/**
 * @param  {Instance} webhookClient Instance of Discord.js Webhook
 * @param  {Object} message Message will be send: { title, description, color }
 */
export default (webhookClient, message) => {
  try {
    const embed = new Discord.MessageEmbed(message);

    webhookClient.send({
      embeds: [embed]
    });
  } catch (error) {
    throw new Error(error);
  }
}