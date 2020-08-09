module.exports = function niver(msg, botId) {
  if (msg.author.id === botId || msg.channel.name !== 'aniversários') {
    return;
  }
  const mongoDB = require('../connections/mongoDB');

  if (msg.content.match(/niver/gi)) {
    msg.channel.send('Aniversário gravado!');
    mongoDB(msg, 'gravar');
    msg.react('🥳');
  } else if (msg.content === '!aniversariantes') {
    msg.channel.send('Buscando aniversariantes');
    mongoDB(msg, 'buscar');
    msg.react('🤘');
  }
};
