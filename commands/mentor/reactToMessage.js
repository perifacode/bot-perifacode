module.exports = (message, emojiList) => {
  emojiList.forEach((emoji) => message.react(emoji));
};
