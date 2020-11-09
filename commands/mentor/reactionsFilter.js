// Filtro que mostra se a pessoa clicou em um dos emojis
// responsáveis por finalizar o comando.
module.exports = (reaction, member, guildMember) => ['✅', '🟢']
  .includes(reaction.emoji.name) && member.id === guildMember.id;
