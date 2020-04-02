const { Client, MessageEmbed } = require('discord.js')
const client = new Client(),
getEvents = require('./commands/events'),
greetings = require('./commands/greeting'),
coursesAndBooks = require('./commands/coursesAndBooks'),
help = require('./commands/help')
github = require('./commands/github')
social = require('./commands/social')
bot = require('./commands/bot')
site = require('./commands/site')
mentor = require('./commands/mentor')
require('dotenv/config')

const base_url = "https://api.sympla.com.br/public/v3/events"

client.on('ready', () => {
  console.log(`Logged in  as ${client.user.tag}`)
})

  
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'bem-vindo');
  if (!channel) return;
  channel.send(
    embed = new MessageEmbed()
      .setTitle('🎉 Bem Vindo! 🎉')
      .setDescription(`
      Seja muito bem vindo ao nosso servidor, ${member}! 
      Aproveite e dê uma olhada no nosso Github e contribua com nossos projetos. 😄
      🔗 http://github.com/perifacode
      `)
      .setFooter(`Criado com 💛 pela comunidade perifaCode`)
      .setColor('#fff200')
  );
});

// !eventos - Mostra o próximo evento do perifaCode
client.on('message', msg => {
  greetings(msg)
  coursesAndBooks(msg)
  help(msg)
  github(msg)
  social(msg)
  bot(msg)
  site(msg)
  mentor(msg)
  if(msg.content === '!eventos') {
    getEvents(base_url)
    .then(nextEvent => {
      msg.channel.send(nextEvent)
    .catch(err => {
      msg.channel.send('Não há próximos eventos por enquanto, mas fique de olho 😉')
    })
    })
  }
})

client.login(process.env.TOKEN_DISCORD)