const { RichEmbed } = require('discord.js')

module.exports = function social(msg) {
  if(msg.content === '!social') {
    embed = new RichEmbed()
      .setTitle('Redes Sociais da Comunidade')
      .setDescription(`
        **Twitter** - http://twitter.com/perifacode
        **Instagram** - http://instagram.com/perifacode
        **LinkedIn** - https://linkedin.com/company/perifacode/
        **Facebook** - http://facebook.com/perifacode
        **Github** - http://github.com/perifacode
      `)
    msg.channel.send(embed)
  }
}