const _ = require("lodash");
const Discord = require("Discord.js");

module.exports.run = async(bot, message, args) => {
    console.log(`russianroulette attempted.`)
    message.channel.send(`You feeling lucky, ${message.author.displayName}?`);
    if (args.length > 0) {
        //Checking for valid input
        if(isNaN(args[0]))
        message.channel.send(`Why are you trying to load a gun with ${args[0]} number of bullets, ${message.author.displayName}?`);

        //Checking for %100 probability
        if(args[0] > 6)
        message.channel.send(`A revolver has 6 bullets... anyways you super dead ${message.author.displayName}.`);

        //Proper arguments
        if (args[0] < 6)
        if (_.random(0, args[0]) >= args[0])
        message.channel.send(`Oof ya dead ${message.author.displayName}!`);
        else
        message.channel.send(`You live ${message.author.displayName}, for now...`);
    }
    //Does not do this. Goes to invalid input instead.
    else
    message.channel.send(`You can't play with no bullets, ${message.author.displayName}. Try loading it by adding bullets. (!russianroulette insertNumberHere)`);
}

module.exports.help = {
    name : "russianroulette"
}