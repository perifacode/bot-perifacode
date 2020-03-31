const { RichEmbed } = require('discord.js')

module.exports = function github(msg) {
  if(msg.content === '!github') {
    embed = new RichEmbed()
      .setTitle('👩🏽‍💻 Github da Comunidade 👨🏽‍💻')
      .setDescription('http://github.com/perifacode')
    msg.channel.send(embed)
  }
}