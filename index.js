import Discord from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const webhookClient = new Discord.WebhookClient(
    process.env.DWB_ID,
    process.env.DWB_TOKEN
);

webhookClient.send(`Hello World`);