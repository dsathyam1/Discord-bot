const { exec } = require("child_process");

function formatDate(date = new Date()) {
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

function log(message) {
  console.log(`[${formatDate()}] ${message}`);
}

module.exports = { formatDate,log};
