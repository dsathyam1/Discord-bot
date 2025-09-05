const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "!help",
  description: "List all commands of this bot",
  execute(msg) {
    const embed = new EmbedBuilder()
      .setColor(0x5865f2)
      .setTitle(" Smart Notifier Bot - Help Menu")
      .setDescription("Here is a list of all available commands:")
      .addFields(
        {
          name: "General",
          value: "`!start` - Introduce the bot\n`!whoisyou` - About the bot",
          inline: false,
        },
        {
          name: "Utility",
          value: "`!remind` - Set a reminder\n`!clear` - Clear messages",
          inline: false,
        },
        {
          name: "Translation",
          value:
            "`!translate` - Translate text to another language\n`!languages` - List all languages that can be translated",
          inline: false,
        },

        {
          name: "Moderation",
          value:
            "`!kick @user` - Kick member\n`!ban @user` - Ban member\n`!mute @user` - Mute member\n`!unmute @user` - Unmute member",
          inline: false,
        },
        {
          name: "Profile",
          value: "`!avatar @user` - Show user’s profile picture",
          inline: false,
        }
      )
      .setFooter({ text: "Use commands with the '!' prefix" })
      .setTimestamp();

    msg.channel.send({ embeds: [embed] });
  },
};
