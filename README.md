# Login Notification Bot

A Discord bot that sends notifications when it comes online, built with Discord.js and Node.js.

## Features

- **Automatic Login Notifications**: Sends a message to a specified Discord channel when the bot comes online
- **Real-time Status Updates**: Provides console logging for bot status and message delivery
- **Configurable**: Easy to configure channel ID and other settings via environment variables
- **Windows Batch Support**: Includes a `.bat` file for easy Windows deployment

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
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
   Create a `.env` file in the root directory with the following variables:
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
6. Invite the bot to your server with appropriate permissions

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

## Project Structure

```
Login Notification bot/
├── src/
│   ├── index.js          # Main entry point
│   ├── bot.js            # Discord bot logic
│   ├── config.js         # Configuration and environment variables
│   ├── scheduler.js      # Scheduling utilities
│   └── utils.js          # Helper functions
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
5. **Status Logging**: Provides console output for monitoring

## Troubleshooting

### Common Issues

**Bot starts but doesn't send messages:**
- Check that your `.env` file is in the root directory
- Verify the `CHANNEL_ID` is correct
- Ensure the bot has permission to send messages in the target channel
- Check that the bot has the required intents enabled

**Environment variables not loading:**
- Make sure the `.env` file is in the project root (same level as `package.json`)
- Verify the file is named exactly `.env` (not `.env.txt` or similar)
- Check that `dotenv` is properly installed

**Permission errors:**
- Ensure the bot has been invited to your server
- Check that the bot has "Send Messages" permission in the target channel
- Verify the bot has the required intents enabled in the Discord Developer Portal

### Debug Mode

To see more detailed logging, you can modify the bot code to add additional console.log statements or use a logging library.

## Dependencies

- **discord.js**: Discord API wrapper for Node.js
- **dotenv**: Environment variable management
- **child_process**: Process management utilities

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
