
function getMessageReactions(message, guildMember) {
  
  // filtro para o método awaitReactions()
  const filter = (reaction, member) => {
    return ['✅']
      .includes(reaction.emoji.name) && member.id === guildMember.id;
  }

  message.awaitReactions(filter, { max: 1, time : 60000, errors: ['time']})
    .then(() => {
      let userReactions = [];
      let messageReactions = message.reactions.cache;  
      messageReactions.forEach(reaction => {
        reaction.users.fetch()
        .then(users => {
          users.forEach(user => {
            if(user.id === guildMember.id) {
              userReactions.push(reaction.emoji.name);
            }
          })
          return userReactions;
        });
      })
    })
}

module.exports = getMessageReactions;