const mentorMessage = require('./mentorMessage');
const getMemberReactions = require('./getMemberReactions');
const manageRole = require('./manageRole');
const getServerRoles = require('./getServerRoles');
const roles = require('../../roles');

module.exports = function mentor(msg) {
  if (msg.content === '!mentorear') {
    msg.react('🎉');
    msg.react('🎈');
    const emojiList = roles.map(role => role.emoji);
    const guildMember = msg.member;
    const filter = (reaction, member) => {
      return ['✅']
      .includes(reaction.emoji.name) && member.id === guildMember.id;
    }
    const serverRoles = getServerRoles(msg);
    msg.reply(mentorMessage).then((message) => {
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
