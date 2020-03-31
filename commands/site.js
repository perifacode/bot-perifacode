const { MessageEmbed } = require ('discord.js')

module.exports = function site(msg) {
  if(msg.content === '!site') {
    embed = new MessageEmbed()
      .setTitle(' 💻 Se liga no site da nossa comunidade 💻')
      .setDescription('🔗 http://perifacode.com')
      .setFooter(`Criado com 💛 pela comunidade perifaCode`)
      .setColor('#fff200')
    msg.channel.send(embed)
  }
}