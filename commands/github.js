const { MessageEmbed } = require('discord.js')

module.exports = function github(msg) {
  if(msg.content === '!github') {
    embed = new MessageEmbed()
      .setTitle('👩🏽‍💻 Github da Comunidade 👨🏽‍💻')
      .setDescription('http://github.com/perifacode')
      .setFooter(`Criado com 💛 pela comunidade perifaCode`)
      .setColor('#fff200')
    msg.channel.send(embed)
  }
}