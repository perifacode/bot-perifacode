const { Client } = require('discord.js')
const client = new Client(),
getEvents = require('./commands/events'),
greetings = require('./commands/greeting'),
coursesAndBooks = require('./commands/coursesAndBooks'),
help = require('./commands/help')
require('dotenv/config')

const base_url = "https://api.sympla.com.br/public/v3/events"

client.on('ready', () => {
  console.log(`Logged in  as ${client.user.tag}`)
})


// !eventos - Mostra o próximo evento do perifaCode
client.on('message', msg => {
  greetings(msg)
  coursesAndBooks(msg)
  help(msg)
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