const { MessageEmbed } = require('discord.js');

module.exports = function social(msg) {
  if (msg.content === '!social') {
    const embed = new MessageEmbed()
      .setTitle('Redes Sociais da Comunidade')
      .setDescription(`
        **Twitter** - http://twitter.com/perifacode
        **Instagram** - http://instagram.com/perifacode
        **LinkedIn** - https://linkedin.com/company/perifacode/
        **Facebook** - http://facebook.com/perifacode
        **Github** - http://github.com/perifacode
      `)
      .setFooter('Criado com 💛 pela comunidade perifaCode')
      .setColor('#fff200');
    msg.channel.send(embed);
  }
};
