module.exports = (message, guildMember) => {
  const reactions = [];
  const messageReactions = message.reactions.cache;

  // Pesquisa as reações da mensagem feitas pelo usuário
  // que executou o comando.
  messageReactions.forEach((reaction) => {
    if (reaction.users.cache.find((u) => u.id === guildMember.id)) {
      reactions.push(reaction.emoji.name);
    }
  });
  return reactions;
};
