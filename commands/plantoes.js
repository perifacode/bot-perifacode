const { MessageEmbed } = require('discord.js');

module.exports = function site(msg) {
  if (msg.content === '!plantao' || msg.content === '!plantoes') {
    const embed = new MessageEmbed()
      .setTitle('🌎 Plantões da perifaCode 🌎')
      .setDescription(`
      👉🏼 Segunda (19h) - Empreendedorismo
      👉🏼 Segunda (21h30) - PHP - EM PAUSA
      👉🏼 Sexta (20h) - C#
      👉🏼 Sexta (20h) - Javascript
      👉🏼 Sábado (09h) - Android
      👉🏼 Sábado (16h) - Java - EM PAUSA

      ⚠ Caso esteja querendo puxar o plantão de alguma outra linguagem, tecnologia, ou qualquer coisa, entrar em contato com um organizador.
      `)
      .setFooter('Criado com 💛 pela comunidade perifaCode')
      .setColor('#fff200');
    msg.channel.send(embed);
  }
};
