/* eslint-disable comma-dangle */
const { Client, MessageEmbed } = require('discord.js');
const cron = require('cron');

const client = new Client();
const events = require('./commands/events');
const greetings = require('./commands/greeting');
const coursesAndBooks = require('./commands/coursesAndBooks');
const help = require('./commands/help');
const github = require('./commands/github');
const social = require('./commands/social');
const bot = require('./commands/bot');
const site = require('./commands/site');
const mentor = require('./commands/mentor/mentor');
const aniversario = require('./commands/aniversario');
const plantoes = require('./commands/plantoes');
require('dotenv/config');

client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === 'bem-vindo'
  );
  if (!channel) return;
  const embed = new MessageEmbed()
    .setTitle('🎉 Bem Vindo! 🎉')
    .setDescription(
      `
      Seja muito bem vindo ao nosso servidor, ${member}! 
      Aproveite e dê uma olhada no nosso Github e contribua com nossos projetos. 😄
      🔗 http://github.com/perifacode
      `
    )
    .setFooter('Criado com 💛 pela comunidade perifaCode')
    .setColor('#fff200');
  channel.send(embed);
});

client.on('message', (msg) => {
  greetings(msg, client.user.id);
  coursesAndBooks(msg);
  help(msg);
  github(msg);
  social(msg);
  bot(msg);
  site(msg);
  mentor(msg);
  events(msg);
  aniversario(msg, client.user.id);
  plantoes(msg);
});

client.login(process.env.TOKEN_DISCORD);

client.on('ready', () => {
  const job = new cron.CronJob(
    '00 00 13 * * *',
    async () => {
      const channel = await client.channels.fetch('713857434711621773'); // ID DO CANAL ANIVERSARIO (talvez desejar parabens no canal geral)
      await channel.send('!aniversariantes');
    },
    null,
    true,
    'America/Sao_Paulo'
  );
  job.start();
});
