function cleanText(text) {
  return text.trim().replace(/\s+/g, " ");
}
function getTimeStamp() {
  return new Date().toLocaleString();
}
module.exports = {getTimeStamp, cleanText}; 
