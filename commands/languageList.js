const { EmbedBuilder } = require("discord.js");

const LANGUAGES = {
  en: "English",
  es: "Spanish",
  fr: "French",
  de: "German",
  hi: "Hindi",
  ja: "Japanese",
  ne: "Nepali",
  "zh-cn": "Chinese (Simplified)",
  "zh-tw": "Chinese (Traditional)",
  ar: "Arabic",
};


module.exports = {
  name: "!languages",
  description: "List all the languages that this bot can translate",

  execute(msg) {
    const embed = new EmbedBuilder()
      .setColor(0x5865f2)
      .setTitle("🌍 Supported Languages")
      .setDescription("Here is a list of all languages this bot can translate:")
      .setFooter({ text: "Use translate command with the '!' prefix" })
      .setTimestamp();

    let langString = "";
    for (const [key, value] of Object.entries(LANGUAGES)) {
      langString += `\`${key}\` - ${value}\n`;
    }

    embed.addFields({ name: "Languages", value: langString });

    msg.channel.send({ embeds: [embed] });
  },
};
