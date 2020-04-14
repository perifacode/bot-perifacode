const mentorMessage = require('./mentorMessage');
const getMemberReactions = require('./getMemberReactions');
const manageRole = require('./manageRole');
const getServerRoles = require('./getServerRoles');
const roles = require('../../roles');

module.exports = (msg) => {
  if (msg.content === '!mentorear' || msg.content === '!mentoria') {
    const mentorRoles = roles.filter(role => role.roleName === 'mentorear' 
      || role.roleName === 'mentoria');
    
    mentorRoles.forEach(r => console.log(`mentorRoles: ${r.roleName}`));

    const chosenMentorRoleEmoji = mentorRoles.find(role => 
      role.roleName === msg.content.replace('!', ''));

    console.log(`messageAjustada: ${msg.content.replace('!', '')}`);
    console.log(`chosenMentorRole: ${chosenMentorRoleEmoji}`);

    msg.react('🎉');
    msg.react('🎈');
    const emojiList = roles.filter(role => role.emoji !== '✅' && role.emoji !== '🟢')
      .map(role => role.emoji);
    emojiList.push(chosenMentorRoleEmoji.emoji);
    console.log(`emojilist: ${emojiList}`)
    const guildMember = msg.member;
    const filter = (reaction, member) => {
      return ['✅', '🟢']
      .includes(reaction.emoji.name) && member.id === guildMember.id;
    }
    const serverRoles = getServerRoles(msg);
    msg.reply(mentorMessage(chosenMentorRoleEmoji.emoji)).then((message) => {
      emojiList.forEach(emoji => message.react(emoji));
      message.awaitReactions(filter, { max: 1, time : 60000, errors: ['time']})
        .then(() => {
          const reactions = getMemberReactions(message, guildMember);
          manageRole(reactions, guildMember, serverRoles);
          })
        .catch(error => console.error(error));
      })
    .catch(error => console.error(error));  
  }
};
