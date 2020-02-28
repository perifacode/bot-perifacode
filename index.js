const { Client } = require('discord.js')
const client = new Client()
const getEvents = require('./commands/events')

require('dotenv/config')

const base_url = "https://api.sympla.com.br/public/v3/events"

client.on('ready', () => {
  console.log(`Logged in  as ${client.user.tag}`)
})

client.on('message', msg => {
  if(msg.content === '!eventos') {
    getEvents(base_url)
    .then(nextEvent => {
      msg.channel.send(nextEvent)
    .catch(err => {
      msg.channel.send('Ops! Ocorreu um erro. Entre em contato com algum organizador. ❌')
    })
    })
  }
})

client.on('message', msg => {
  if(msg.content === 'bom dia' || msg.content === 'Bom dia') {
    msg.channel.send('Bom diaaaa! 🌞')
  }

  if(msg.content === 'boa tarde' || msg.content === 'Boa tarde') {
    msg.channel.send('Bom tardeeee! 🌤')
  }

  if(msg.content === 'boa noite' || msg.content === 'Boa noite') {
    msg.channel.send('Boa noiteee! 😴')
  }
})

client.login(process.env.TOKEN_DISCORD)