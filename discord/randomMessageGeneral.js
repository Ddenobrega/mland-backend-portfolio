require("dotenv").config();
const bot = require("./bot");
async function userData() {
  const guild_id = "910015309824524288";
  bot.guilds.fetch(guild_id).then((guild) => {
    let members = guild.members;
  });
}

function send() {
  const messages = [
    // quotes go here,
  ];
  const message = Math.floor(Math.random() * (messages.length - 0 + 1) + 0);
  return messages[message];
}
userData();

const returns = { send };
module.exports = returns;
