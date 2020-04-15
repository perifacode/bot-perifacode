module.exports = (message, guildMember) => {
  // creates an empty list
  const reactions = [];

  // gets all reactions from message
  const messageReactions = message.reactions.cache;  
  
  // checks for guildMember reactions
  // filter could be used but forEach was chosen
  // to improve readability
  messageReactions.forEach(reaction => {
    if(reaction.users.cache.find(u => u.id === guildMember.id)) {
      reactions.push(reaction.emoji.name);
    };
  })
  return reactions;
}