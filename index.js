import WebhookClient from './src/WebhookClient';
import SendSimpleMessage from './src/SendSimpleMessage';
import SendEmbedMessage from './src/SendEmbedMessage';

const webhookClient = WebhookClient();

SendSimpleMessage(webhookClient, `Hi, good evening`);

SendEmbedMessage(
  webhookClient,
  {
    title: 'Embed Test',
    description: 'This is a embed message test',
    color: '#ff3300'
  }
);
