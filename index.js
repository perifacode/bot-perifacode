const { Client, MessageEmbed } = require('discord.js');

const client = new Client();
const getEvents = require('./commands/events');
const greetings = require('./commands/greeting');
const coursesAndBooks = require('./commands/coursesAndBooks');
const help = require('./commands/help');
const github = require('./commands/github');
const social = require('./commands/social');
const bot = require('./commands/bot');
const site = require('./commands/site');
const mentor = require('./commands/mentor');
require('dotenv/config');

const baseUrl = 'https://api.sympla.com.br/public/v3/events';

client.on('ready', () => {
  console.log(`Logged in  as ${client.user.tag}`);
});


client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find((ch) => ch.name === 'bem-vindo');
  if (!channel) return;
  const embed = new MessageEmbed()
    .setTitle('🎉 Bem Vindo! 🎉')
    .setDescription(`
      Seja muito bem vindo ao nosso servidor, ${member}! 
      Aproveite e dê uma olhada no nosso Github e contribua com nossos projetos. 😄
      🔗 http://github.com/perifacode
      `)
    .setFooter('Criado com 💛 pela comunidade perifaCode')
    .setColor('#fff200');
  channel.send(embed);
});

// !eventos - Mostra o próximo evento do perifaCode
client.on('message', (msg) => {
  greetings(msg);
  coursesAndBooks(msg);
  help(msg);
  github(msg);
  social(msg);
  bot(msg);
  site(msg);
  mentor(msg);
  if (msg.content === '!eventos') {
    getEvents(baseUrl)
      .then((nextEvent) => {
        msg.channel.send(nextEvent)
          .catch(() => {
            msg.channel.send('Não há próximos eventos por enquanto, mas fique de olho 😉');
          });
      });
  }
});

client.login(process.env.TOKEN_DISCORD);
