module.exports = (message, rolesList) => {
  const mentorRoles = rolesList.filter((role) => role.roleName === 'mentor'
  || role.roleName === 'mentorado');

  // processes message
  const processedMessage = message.content.replace('!', '');

  // gets correct role emoji
  const chosenMentorRoleEmoji = mentorRoles
    .find((role) => role.roleName === processedMessage).emoji;

  // removes "mentor" roles emoji from emojiList
  const emojiList = rolesList
    .filter((role) => role.emoji !== '✅' && role.emoji !== '🟢')
    .map((role) => role.emoji);

  // pushes correct emoji to emojiList
  emojiList.push(chosenMentorRoleEmoji);

  return emojiList;
};
