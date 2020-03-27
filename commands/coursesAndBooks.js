const { RichEmbed } = require('discord.js')

module.exports = function coursesAndBooks(msg) {
  if(msg.content === '!livros' || msg.content === '!cursos') {
    const embed = new RichEmbed()
      .setTitle('Lista de conteúdo gratuito do perifaCode 📌')
      .setDescription(`http://github.com/perifacode/conteudo-gratuito 📚
      PS: Abre um PR lá e ajude a melhorar a lista 😉`)
    msg.channel.send(embed)
  }
}