module.exports = (message, rolesList) => {
  const mentorRoles = rolesList.filter((role) => role.roleName === 'mentor'
  || role.roleName === 'mentorado');

  const processedMessage = message.content.replace('!', '');

  // Busca o emoji específico do comando utilizado
  const chosenMentorRoleEmoji = mentorRoles
    .find((role) => role.roleName === processedMessage).emoji;

  const emojiList = rolesList
    .filter((role) => role.emoji !== '✅' && role.emoji !== '🟢')
    .map((role) => role.emoji);

  emojiList.push(chosenMentorRoleEmoji);
  return emojiList;
};
