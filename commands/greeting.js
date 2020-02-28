module.exports = function greetings(msg) {
  if(msg.content === 'bom dia' || msg.content === 'Bom dia') {
    msg.channel.send('Bom diaaaa! 🌞')
  }

  if(msg.content === 'boa tarde' || msg.content === 'Boa tarde') {
    msg.channel.send('Boa tardeeee! 🌤')
  }

  if(msg.content === 'boa noite' || msg.content === 'Boa noite') {
    msg.channel.send('Boa noiteee! 😴')
  }
}