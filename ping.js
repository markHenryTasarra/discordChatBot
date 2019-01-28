const Discord = require("Discord.js");
module.exports.run = async(bot, message, args) => {
    console.log(`ping attempted.`)
    message.channel.send(`Pong! Or did you mean ping = ${Math.round(bot.ping)}ms?`);
}

module.exports.help = {
    name : "ping"
}
