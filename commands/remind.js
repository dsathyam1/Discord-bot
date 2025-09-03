const {scheduleNotification} = require('../src/scheduler'); 
const { description } = require('./start');

module.exports = {
    name: "!remind", 
    description: "set a custom reminder with optional time", 
    execute(msg){
        const args = msg.content.replace("!remind", "").trim(); 

        if(!args){
            return msg.reply("Please provide a reminder text. Example: `!remind Take a break  10`"); 
        }
        const match = args.match(/(.+)\s+(\d+)$/); 
        let reminderText, time;

        if(match){
            reminderText = match[1].trim(); 
            time = parseInt(match[2]); 

        }else {
            reminderText = args; 
            time = 10;
        }
        msg.reply(`Reminder set: ${reminderText}  ${time} seconds`); 
        scheduleNotification(msg.channel, reminderText, time); 
     }, 
}; 