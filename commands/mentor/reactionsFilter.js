module.exports = (reaction, member, guildMember) => {
  // tries to find ✅ or 🟢 into message reactions
  // checks for reaction author comparing member.id to
  // guildMember.id
  return ['✅', '🟢']
    .includes(reaction.emoji.name) && member.id === guildMember.id;
}