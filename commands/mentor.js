module.exports = function mentor(msg) {
  if (msg.content === '!mentorar') {
    if(msg.member.roles.cache.some(r=>['Mentor'].includes(r.name))) {
      msg.channel.send('Você já é mentor!')
      msg.react('🎉')
      msg.react('🎈')
    } else {
      const guildMember = msg.member
      guildMember.roles.add('695071144537096242')
      msg.reply('obrigado por se candidatar como mentor!')
      msg.react('🎉')
      msg.react('🎈')
    }
  }
}