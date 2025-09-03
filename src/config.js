const dotenv = require('dotenv'); 
const path = require('path'); 

dotenv.config({ path: path.resolve(__dirname, "../.env") });
module.exports = {
    CHANNEL_ID: process.env.CHANNEL_ID,
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    POLL_INTERVAL: 1000
}; 
