module.exports = {
  name: "!clear",
  description: "It will clear the text on the channel based on the number",
  async execute(msg, args) {
    if (!msg.member.permissions.has("ManageMessages")) {
      return msg.reply("You donot have permission to delete the message");
    }

    if (!args || args.length === 0) {
      return msg.reply(
        "Please provide the number of message you want to delete. Example: `!Clear 10`"
      );
    }
    const amount = parseInt(args[0]);

    if (isNaN(amount) || amount < 1 || amount > 100) {
      return msg.reply("Please specify a number between 1 to 100");
    }

    await msg.channel.bulkDelete(amount, true).catch((err) => {
      console.error(err);
      return msg.reply("There was an error trying delete the messages");
    });

    msg.channel.send(`Deleted ${amount} messages.`).then((m) => {
      setTimeout(() => m.delete(), 3000);
    });
  },
};
