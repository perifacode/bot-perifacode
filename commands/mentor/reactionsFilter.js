module.exports = (reaction, member, guildMember) => ['✅', '🟢']
  .includes(reaction.emoji.name) && member.id === guildMember.id;
