import SendEmbedMessageByApi from './src/with-discord-api/SendEmbedMessageByApi';

(async () => {
  const success = await SendEmbedMessageByApi(
    { 
      title: 'Bom dia'
    }
  );
  if(success)
    console.log('Sucesso ao enviar mensagem para o Discord');
  else
    console.error('Falha ao enviar mensagem para o Discord.');
})();