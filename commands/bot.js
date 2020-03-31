const { RichEmbed } = require('discord.js')

module.exports = function bot(msg) {
  if(msg.content === '!bot') {
    embed = new RichEmbed()
      .setTitle('🤖 Contribua com o bot da comunidade 🤖')
      .setDescription(`
       🔗 https://github.com/perifacode/bot-perifacode
       Abre um PR lá 😎
      `)
    msg.channel.send(embed)
  }
}