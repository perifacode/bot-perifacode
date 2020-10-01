const { MessageEmbed } = require('discord.js');
const roles = require('../../roles');

const description = roles
  .filter((r) => r.roleName !== 'mentor' && r.roleName !== 'mentorado')
  .reduce((a, b) => `${a} \n ${b.emoji} - ${b.roleName}\n`);

module.exports = (emoji) => new MessageEmbed()
  .setTitle('👩🏽‍💻 Quais os temas que você deseja receber/oferecer mentorias? 👨🏽‍💻')
  .setDescription(`
    ${description}    
    ${emoji} - Pronto

    `)
  .setFooter('Criado com 💛 pela comunidade perifaCode')
  .setColor('#fff200');
