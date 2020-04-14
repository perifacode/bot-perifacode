module.exports = function greetings(msg, botId) {
  if (msg.author.id === botId) {
    return;
  }

  if (msg.content.match(/^bom dia/gi)) {
    msg.channel.send('Bom diaaaa! 🌞');
    msg.react('🌞');
  }

  if (msg.content.match(/^boa tarde/gi)) {
    msg.channel.send('Boa tardeeee! 🌤');
    msg.react('⛅');
  }

  if (msg.content.match(/^boa noite/gi)) {
    msg.channel.send('Boa noiteee! 😴');
    msg.react('😴');
    msg.react('💤');
  }
};
