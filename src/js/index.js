const { Client, RichEmbed } = require('discord.js')
const client = new Client()
const getEvents = require('./events')

require('dotenv/config')

const base_url = "https://api.sympla.com.br/public/v3/events"

client.on('ready', () => {
  console.log(`Logged in  as ${client.user.tag}`)
})




client.on('message', msg => {
  if(msg.content === '!eventos') {
    getEvents(base_url)
    .then(nextEvent => {
      const embed = new RichEmbed()
      .setTitle("Próximos eventos do perifaCode")
      .setDescription(`
        📄 Nome: ${nextEvent.name}
  
        📅 Data: ${nextEvent.start_date}
  
        🏙 Local: ${nextEvent.address.name}
  
        ✅ Inscrições abertas em: ${nextEvent.url}
      `)
      msg.channel.send(embed)
    })
  }
})

client.login(process.env.TOKEN_DISCORD)