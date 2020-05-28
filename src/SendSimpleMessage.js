/**
 * @param  {Instance} webhookClient Instance of Discord.js Webhook
 * @param  {String} message Message will be send
 */
export default (webhookClient, message) => {
  try {
    webhookClient.send(message);
  } catch (error) {
    throw new Error(error)
  }
}