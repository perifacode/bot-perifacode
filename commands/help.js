const { MessageEmbed } = require ('discord.js')

module.exports = function help(msg) {
  if(msg.content === '!help' || msg.content === '!ajuda' || msg.content === '!comandos') {
    embed = new MessageEmbed()
      .setTitle('🤖 Comandos do nosso bot 🤖')
      .setDescription(`

        **!ajuda, !help ou !comandos** - Mostra todos os comandos do nosso bot;

        **!eventos** - Mostra o próximo evento que iremos fazer. (Presencial ou online);

        **!livros e !cursos** - Link para o nosso repositório com livros e cursos gratuitos;
      `)
      .setFooter(`Criado com 💛 pela comunidade perifaCode`)
      .setColor('#fff200')
    msg.channel.send(embed)
  }
}