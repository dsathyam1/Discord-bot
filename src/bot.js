const { Client, GatewayIntentBits } = require("discord.js");
const { CHANNEL_ID, DISCORD_TOKEN } = require("./config");
const { formatDate } = require("./utils");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const commands = new Map();

// Correct path to root commands folder
const commandsPath = path.join(__dirname, "..", "commands");

if (!fs.existsSync(commandsPath)) {
  console.error(
    "Commands folder not found! Please create a 'commands' folder in the root directory."
  );
  process.exit(1);
}

// Read all .js files in the commands folder 
const commandFiles = fs.readdirSync(commandsPath);

for (const file of commandFiles) {
  if (file.endsWith(".js")) {
    const cmd = require(path.join(commandsPath, file));
    commands.set(cmd.name, cmd);
  }
}

client.once("ready", async () => {
  console.log(`Discord bot logged in as ${client.user.tag}`);
  await sendLoginMessage(`Login alert at: ${formatDate()}`);
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;
  const parts = msg.content.trim().split(/ +/)
  const commandName = parts.shift(); 
  const args = parts 
  if (commands.has(commandName)) {
    try {
      commands.get(commandName).execute(msg, args);
    } catch (err) {
      console.error(err);
      msg.reply(" Something went wrong running that command.");
    }
  }
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
