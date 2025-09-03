const { Client, GatewayIntentBits } = require("discord.js");
const { CHANNEL_ID, DISCORD_TOKEN } = require("./config");
const { formatDate } = require("./utils");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once("ready", async () => {
  console.log(`Discord bot logged in as ${client.user.tag}`);
  await sendLoginMessage(`Login alert at: ${formatDate()}`);
});

async function sendLoginMessage(message) {
  try {
    const channel = await client.channels.fetch(CHANNEL_ID);
    if (channel) {
      await channel.send(message);
      console.log("Sent login message");
    } else {
      console.log("Channel not found");
    }
  } catch (err) {
    console.error("Failed to send login message:", err);
  }
}

function startBot() {
  client
    .login(DISCORD_TOKEN)
    .catch((err) => console.error("Failed to login:", err));
}

module.exports = { startBot, sendLoginMessage };
