module.exports = function(message, guildMember) {
  const messageReactions = message.reactions.cache;  
  const reactions = [];
  messageReactions.forEach(reaction => {
    if(reaction.users.cache.find(u => u.id === guildMember.id)) {
      reactions.push(reaction.emoji.name);
    };
  })
  return reactions;
}