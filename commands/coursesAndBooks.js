const { MessageEmbed } = require('discord.js');

module.exports = function coursesAndBooks(msg) {
  if (msg.content === '!livros' || msg.content === '!cursos' || msg.content === '!conteudos') {
    const embed = new MessageEmbed()
      .setTitle('Lista de conteúdo gratuito do perifaCode 📌')
      .setDescription(`http://github.com/perifacode/conteudo-gratuito 📚
      PS: Abre um PR lá e ajude a melhorar a lista 😉`)
      .setFooter('Criado com 💛 pela comunidade perifaCode')
      .setColor('#fff200');
    msg.channel.send(embed);
  }
};
