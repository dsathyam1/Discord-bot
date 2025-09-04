const { EmbedBuilder } = require("discord.js");
const { description, execute } = require("./start");

module.exports = {
  name: "!serverInfo",
  description: "It shows information about the server",

  async execute(msg) {
    const { guild } = msg;
    const owner = await guild.fetchOwner();

    const embed = new EmbedBuilder()
      .setColor(0x3498db)
      .setTitle(`Server Name ${guild.name}`)
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .addFields(
        { name: "Server Name:", value: guild.name, inline: true },
        { name: "Owner Name:", value: `${owner.user.tag}`, inline: true },
        { name: "Region:", value: guild.preferredLocale, inline: true },
        { name: "Members:", value: `${guild.memberCount}`, inline: true },
        {
          name: "Created On:",
          value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:D>`,
          inline: true,
        },
        {
          name: "Channels",
          value: `${guild.channels.cache.size}`,
          inline: true,
        },
        { name: "Roles", value: `${guild.roles.cache.size}`, inline: true }
      )
      .setFooter({text: `Server Id: ${guild.id}`})
      .setTimestamp();  
      msg.channel.send({embeds: [embed]}); 
  },
};
