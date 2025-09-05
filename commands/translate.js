const translate = require("@iamtraction/google-translate");

module.exports = {
  name: "!translate",
  description: "Translates one texts to other language",

  async execute(msg, args) {
    const targetLang = args[0];
    const text = args.slice(1).join(" ");

    if (!targetLang || !text) {
      return msg.reply(
        "Usage: `!translate <lang> <text>`\nExample: `!translate es Hello, How are you?`"
      );
    }
    try {
      const res = await translate(text, { to: targetLang });
      msg.reply(`Translation ${targetLang}: \n${res.text}`);
    } catch (err) {
      console.error(err);
      msg.reply("Sorry i could not translate that text");
    }
  },
};
