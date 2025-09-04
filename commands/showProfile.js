module.exports = {
  name: "!avatar",
  description: "Shows the profile picture of the mentioned user",
  execute(msg) {
    const user = msg.mentions.members.first() || msg.author;
    msg.reply(
      `${user.username}'s avatar: ${user.displayAvatarURL({
        dynamic: true,
        size: 1024,
      })}`
    );
  },
};