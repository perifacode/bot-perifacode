module.exports = function greetings(msg) {
  if (msg.content === 'bom dia' || msg.content === 'Bom dia' || msg.content === 'Bom dia!' || msg.content === 'bom dia!') {
    msg.channel.send('Bom diaaaa! 🌞');
    msg.react('🌞');
  }

  if (msg.content === 'boa tarde' || msg.content === 'Boa tarde' || msg.content === 'Boa tarde!' || msg.content === 'boa tarde!') {
    msg.channel.send('Boa tardeeee! 🌤');
    msg.react('⛅');
  }

  if (msg.content === 'boa noite' || msg.content === 'Boa noite' || msg.content === 'Boa noite!' || msg.content === 'boa noite!') {
    msg.channel.send('Boa noiteee! 😴');
    msg.react('😴');
    msg.react('💤');
  }
};
