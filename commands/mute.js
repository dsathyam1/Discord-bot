const { PermissionsBitField, Colors } = require("discord.js");

module.exports = {
  name: "!mute",
  description:
    "Mute a member in the server (requires Manage Roles permission).",
  async execute(msg) {
    if (!msg.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) {
      return msg.reply(
        "You do not have permission to mute members. (Manage Roles permission required)"
      );
    }

    if (
      !msg.guild.members.me.permissions.has(
        PermissionsBitField.Flags.ManageRoles
      )
    ) {
      return msg.reply("I do not have permission to manage roles.");
    }

    const user = msg.mentions.members.first();
    if (!user) {
      return msg.reply(
        "You need to mention a member to mute. Example: `!mute @user`"
      );
    }

    let muteRole = msg.guild.roles.cache.find((r) => r.name === "Muted");
    if (!muteRole) {
      try {
        muteRole = await msg.guild.roles.create({
          name: "Muted",
          color: Colors.Gray,
          permissions: [],
        });

        for (const [channelId, channel] of msg.guild.channels.cache) {
          await channel.permissionOverwrites.edit(muteRole, {
            SendMessages: false,
            AddReactions: false,
            Speak: false,
          });
        }
      } catch (err) {
        console.error(err);
        return msg.reply("Failed to create the Muted role.");
      }
    }

    if (user.roles.cache.has(muteRole.id)) {
      return msg.reply("This member is already muted.");
    }

    try {
      await user.roles.add(muteRole);
      msg.channel.send(`${user.user.tag} has been muted.`);
    } catch (err) {
      console.error(err);
      msg.reply("Could not mute this member.");
    }
  },
};
