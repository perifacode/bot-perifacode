process.binding('http_parser').HTTPParser = require('http-parser-js').HTTPParser;
const axios = require('axios')
require('dotenv/config')
const { RichEmbed } = require('discord.js')
module.exports = function eventsPerifacode(url) {
  return axios.get(url, {
    headers: {
      s_token: process.env.TOKEN_SYMPLA
    }
  })
    .then(response => {
      events = response.data
      nextEvent = events.data[events.data.length-1]
      eventDate = new Date(nextEvent.start_date)
      actualDate = new Date()
      console.log(nextEvent)
      if (eventDate > actualDate) {
        return new RichEmbed()
          .setTitle("Próximos eventos do perifaCode")
          .setDescription(`
            📌 - ${nextEvent.name}
      
            📅 - ${nextEvent.start_date}
      
            🏙 - ${nextEvent.address.name}
      
            ✅ Inscrições abertas em: ${nextEvent.url}
          `)
      } else {
        return 'Não há próximos eventos por enquanto, mas fique de olho 😉'
      }
    })
    .catch(err => {
      console.log(err)
  })
}