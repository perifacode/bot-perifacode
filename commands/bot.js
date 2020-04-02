const { MessageEmbed } = require('discord.js');

module.exports = function bot(msg) {
  if (msg.content === '!bot') {
    const embed = new MessageEmbed()
      .setTitle('🤖 Contribua com o bot da comunidade 🤖')
      .setDescription(`
       🔗 https://github.com/perifacode/bot-perifacode
       Abre um PR lá 😎
      `)
      .setFooter('Criado com 💛 pela comunidade perifaCode')
      .setColor('#fff200');
    msg.channel.send(embed);
  }
};
