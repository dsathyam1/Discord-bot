module.exports = {
  name: "!kick",
  description:
    "This command will kick members, but you need the Kick Members permission.",
  async execute(msg) {
    if (!msg.member.permissions.has("KickMembers")) {
      return msg.reply(
        " You do not have permission to kick members. (Kick Members permission required)"
      );
    }

    const user = msg.mentions.members.first();
    if (!user) {
      return msg.reply(" You need to mention a member to kick. Example: `!kick @user`");
    }

    if (!user.kickable) {
      return msg.reply("I cannot kick this member. They may have a higher role than me.");
    }

    try {
      await user.kick();
      msg.channel.send(` ${user.user.tag} has been kicked from the server.`);
    } catch (err) {
      console.error(err);
      msg.reply(" There was an error trying to kick this member.");
    }
  },
};
