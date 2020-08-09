module.exports = function niver(msg, botId) {
  if (msg.author.id === botId || msg.channel.name !== 'teste-bot') {
    return;
  }
  const mongoDB = require('../connections/mongoDB');

  if (msg.content.match(/niver/gi)) {
    msg.channel.send('Aniversário gravado!');
    mongoDB(msg, 'gravar');
    msg.react('🥳');
  } else if (msg.content === '!buscar') {
    msg.channel.send('Buscando aniversariantes');
    mongoDB(msg, 'buscar');
    msg.react('🤘');
  }
};