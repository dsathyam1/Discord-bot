const { PermissionsBitField } = require("discord.js");

module.exports = {
  name: "!unmute",
  description:
    "Unmute a member in the server (requires Manage Roles permission).",
  async execute(msg) {
    if (!msg.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) {
      return msg.reply(
        "You do not have permission to unmute member (Manage roles required)"
      );
    }
    if (
      !msg.guild.members.me.permissions.has(
        PermissionsBitField.Flags.ManageRoles
      )
    ) {
      return msg.reply("I do not have the permission to manage roles");
    }
    const user = msg.mentions.members.first();
    if (!user) {
      return msg.reply(
        "You need to mention a member to unmute them. Example: `!unmute @user`"
      );
    }
    const muteRole = msg.guild.roles.cache.find((r) => r.name === "Muted");
    if (!muteRole) {
      return msg.reply("There is no Muted roles in this server");
    }

    if (!user.roles.cache.has(muteRole.id)) {
      return msg.reply("This user is not muted");
    }
    //removing the muted users
    try {
      await user.roles.remove(muteRole);
      msg.channel.send(`${user.user.tag} has been unmuted`);
    } catch (err) {
        console.error(err)
        msg.reply("Could not unmute this user")
    }
  },
};
