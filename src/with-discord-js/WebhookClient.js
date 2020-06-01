import Discord from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

/**
 * @returns {instance} WebhookCliente Instance of Webhook Cliente
*/
export default () => {
  return new Discord.WebhookClient(
    process.env.DWB_ID,
    process.env.DWB_TOKEN
  );
}