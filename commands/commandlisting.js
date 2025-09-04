module.exports = {
  name: "!help",
  description: "It will list all the commands of this bot",
  execute(msg) {
    msg.reply(
      "`!start: Bot will introduce itself`\n" +
        "`!whoisyou: Bot will tell you about itself`\n" +
        "`!remind: Set a custom reminder with optional time`\n" +
        "`!clear: Clears specific texts`\n" + 
        "`!kick: Kicks specific member`\n" +
        "`!ban: Bans specific member`"
    );
  },
};
