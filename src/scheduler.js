function cleanText(text) {
  return text.trim().replace(/\s+/g, " ");
}
function getTimeStamp() {
  return new Date().toLocaleString();
}

function scheduleNotification(channel,text,delaySeconds){
  setTimeout(() => {
    channel.send(`${text}`)

  }, delaySeconds*1000);

}
module.exports = {getTimeStamp, cleanText, scheduleNotification}; 
