# Login Notification Bot

A Discord bot built with Discord.js (v14) and Node.js. It sends a notification when it comes online and supports a set of utility, moderation, profile, and translation commands via a simple text prefix.

## Features

- **Automatic login notification**: Sends a message to a specified channel on the `ready` event
- **Text command framework**: Commands are auto-loaded from the root `commands` folder
- **Utilities**: Reminders, clearing messages, server info, profile avatar
- **Moderation**: Kick, ban, mute, unmute
- **Translation**: Translate text and list supported languages
- **Configurable**: Uses `.env` for `DISCORD_TOKEN` and `CHANNEL_ID`
- **Windows batch support**: `startbot.bat` for quick startup on Windows

## Prerequisites

- [Node.js](https://nodejs.org/) (v16.11+ recommended for Discord.js v14; v18+ is ideal)
- [Discord Bot Token](https://discord.com/developers/applications)
- Discord server with appropriate permissions

## Installation

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/dsathyam1/Login-notifcation-bot
   cd Login Notification bot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment configuration**
   Create a `.env` file in the project root (same level as `package.json`) with:
   ```env
   DISCORD_TOKEN=your_discord_bot_token_here
   CHANNEL_ID=your_discord_channel_id_here
   ```

## Configuration

### Discord Bot Setup

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Go to the "Bot" section and create a bot
4. Copy the bot token and add it to your `.env` file
5. Enable the following intents:
   - Guilds
   - Guild Messages
   - Message Content
6. Invite the bot to your server with appropriate permissions (Send Messages, Manage Messages for `!clear`, Manage Roles for `!mute`/`!unmute`, Kick Members, Ban Members as needed)

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DISCORD_TOKEN` | Your Discord bot token | Yes |
| `CHANNEL_ID` | ID of the channel where notifications will be sent | Yes |

### Getting Channel ID

1. Enable Developer Mode in Discord (User Settings > Advanced > Developer Mode)
2. Right-click on the target channel
3. Select "Copy ID"

## Usage

### Method 1: Command Line (Recommended for Development)

```bash
npm start
```

Or directly:
```bash
node src/index.js
```

### Method 2: Windows Batch File

Double-click `startbot.bat` or run it from Command Prompt.

**Note**: The batch file automatically:
- Changes to the correct directory
- Waits 15 seconds for system initialization
- Starts the bot
- Pauses to keep the window open

### Method 3: Add NPM Script

Add this to your `package.json` scripts section:
```json
{
  "scripts": {
    "start": "node src/index.js",
    "dev": "node src/index.js"
  }
}
```

Then run:
```bash
npm start
```

### Interacting with the bot

- Default prefix: `!`
- Type `!help` in a channel where the bot is present to see an embedded help menu.

## Commands

All commands are plain text and auto-registered from the `commands` folder.

- **General**
  - `!start` — Greet/introduction
  - `!help` — Show help menu with all commands
- **Utility**
  - `!remind <text> [seconds]` — Set a reminder; time defaults to 10 seconds if omitted. Example: `!remind Take a break 60`
  - `!clear <1-100>` — Delete recent messages in bulk (Manage Messages permission required)
  - `!serverInfo` — Show server information (owner, members, channels, created date)
- **Profile**
  - `!avatar [@user]` — Show the user’s profile picture
- **Translation**
  - `!translate <lang> <text>` — Translate text to a given language code. Example: `!translate es Hello`
  - `!languages` — List supported language codes
- **Moderation**
  - `!kick @user` — Kick a member (Kick Members permission required)
  - `!ban @user` — Ban a member (Ban Members permission required)
  - `!mute @user` — Assign a Muted role with restricted permissions (Manage Roles required)
  - `!unmute @user` — Remove the Muted role (Manage Roles required)
  **Fun** 
  - `!jokes @user` — Roast the user

## Project Structure

```
Login Notification bot/
├── src/
│   ├── index.js          # Main entry point
│   ├── bot.js            # Discord bot logic
│   ├── config.js         # Configuration and environment variables
│   ├── scheduler.js      # Scheduling utilities
│   └── utils.js          # Helper functions
├── commands/             # Text commands auto-loaded by the bot
├── .env                  # Environment variables (create this)
├── package.json          # Dependencies and project info
├── startbot.bat          # Windows batch file for easy startup
└── README.md             # This file
```

## How It Works

1. **Initialization**: The bot loads configuration from environment variables
2. **Connection**: Connects to Discord using the provided token
3. **Login Event**: When successfully logged in, triggers the `ready` event
4. **Notification**: Automatically sends a message to the specified channel
5. **Command Handling**: Listens to messages and dispatches to matching command modules
6. **Status Logging**: Provides console output for monitoring

## Troubleshooting

### Common Issues

**Bot starts but doesn't send messages:**
- Check that your `.env` file is in the root directory
- Verify the `CHANNEL_ID` is correct
- Ensure the bot has permission to send messages in the target channel
- Check that the bot has the required intents enabled (Guilds, Guild Messages, Message Content)

**Environment variables not loading:**
- Make sure the `.env` file is in the project root (same level as `package.json`)
- Verify the file is named exactly `.env` (not `.env.txt` or similar)
- Check that `dotenv` is properly installed

**Permission errors:**
- Ensure the bot has been invited to your server
- Check that the bot has "Send Messages" permission in the target channel
- Verify the bot has the required intents enabled in the Discord Developer Portal
- For moderation commands, ensure your account and the bot both have the necessary permissions and the bot's role is high enough

### Debug Mode

To see more detailed logging, you can modify the bot code to add additional console.log statements or use a logging library.

## Dependencies

- **discord.js**: Discord API wrapper for Node.js
- **dotenv**: Environment variable management
- **@iamtraction/google-translate**: Translation API wrapper
- **@vitalets/google-translate-api**: Additional translation support (installed; main usage is via `@iamtraction/google-translate`)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Verify your Discord bot setup
3. Check the console output for error messages
4. Ensure all environment variables are properly set

## Security Notes

- **Never commit your `.env` file** - it contains sensitive information
- Keep your Discord bot token secure
- Regularly rotate your bot token if needed
- Only give the bot the minimum permissions required

## Notes

- Commands are loaded from the root `commands` directory at runtime. Ensure this folder exists and contains `.js` files exporting `{ name, description, execute }`.
- The bot sends a login message to the channel defined by `CHANNEL_ID` when it becomes ready.
