module.exports = (message, emojiList) => {
  // reacts to message with every emoji from emojiList
  emojiList.forEach(emoji => message.react(emoji));
}