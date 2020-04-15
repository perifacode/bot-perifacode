const mentorMessage = require('./mentorMessage');
const getMemberReactions = require('./getMemberReactions');
const manageRole = require('./manageRole');
const getServerRoles = require('./getServerRoles');
const processedEmojiList = require('./processEmojiList');
const reactionsFilter = require('./reactionsFilter');
const reactToMessage = require('./reactToMessage');
const roles = require('../../roles');

module.exports = (msg) => {
  if (msg.content === '!mentorear' || msg.content === '!mentoria') {
   
    // initial reaction
    reactToMessage(msg, ['🎉', '🎈']);

    const guildMember = msg.member;
    const emojiList = processedEmojiList(msg, roles);
    const serverRoles = getServerRoles(msg);

    msg.reply(mentorMessage(emojiList[emojiList.length - 1])).then((message) => {
      // reacts to message with all emojis from emojiLIst
      reactToMessage(message, emojiList);
      // awaits for mentor roles emoji reaction
      message.awaitReactions(reactionsFilter(reaction, member, guildMember), { max: 1, time : 60000, errors: ['time']})
        .then(() => {
          // gets all reactions from member
          const reactions = getMemberReactions(message, guildMember);
          // manages member roles
          manageRole(reactions, guildMember, serverRoles);
          })
        .catch(error => console.error(error));
      })
    .catch(error => console.error(error));  
  }
};
