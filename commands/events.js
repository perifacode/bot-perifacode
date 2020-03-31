process.binding('http_parser').HTTPParser = require('http-parser-js').HTTPParser;
const axios = require('axios')
const { MessageEmbed } = require('discord.js')
require('dotenv/config')


function formatDate(date) {
        dia  = date.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (date.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = date.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}

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
        return new MessageEmbed()
          .setTitle("Próximos eventos do perifaCode")
          .setDescription(`
            📌 - ${nextEvent.name}
      
            📅 - ${formatDate(eventDate)}
      
            🏙 - ${nextEvent.address.name}
      
            ✅ Inscrições abertas em: ${nextEvent.url}
          `)
          .setFooter(`Criado com 💛 pela comunidade perifaCode`)
          .setColor('#fff200')
      } else {
        return 'Não há próximos eventos por enquanto, mas fique de olho 😉'
      }
    })
    .catch(err => {
      console.log(err)
  })
}