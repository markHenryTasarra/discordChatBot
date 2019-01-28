//Dependancies
const Discord = require('discord.js');
const fs = require('fs');

//
const package = require('./package.json');
const bot = new Discord.Client({
    disableEveryone: true
});

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if(err)
    console.log(err);

    //Checking for command files in command
    let jsFile = files.filter (f => f.split(".").pop() === "js");
    if (jsFile.length <= 0) {
        console.log("Can't find commands.");
        return;
    }

    //Logs all files loaded
    jsFile.forEach((file, i) => {
        let props = require (`./commands/${file}`);
        console.log(`${file} loaded.`);
        bot.commands.set(props.help.name, props);
    })
});

bot.on("ready", async () => {
    console.log(`Bot ready!`);
    //Use this to make any automatic time based functions
})

bot.on("guildMemberAdd", member => {
    //On joining a server
    const channel = member.guild.channels.fine(ch => ch.name == "general");//general channel
    channel.send(`Hi ${member.displayName}!`);//Hello discord world!
})

bot.on("message", msg => {
    //On a message
    if (msg.author.bot) return;
    //if (message.channel.type === "dm") return;
    let prefix = "!"; //Sets the prefix declared in config.json or later "config.prefix"
    let messageArray = msg.content.split(" "); //turns the message into an array of strings by splitting by space, and set to lowercase
    let cmd = messageArray[0].toLowerCase(); //the command section of the message
    let args = messageArray.slice(1); //the arguments after the command
    let commandFile = bot.commands.get(cmd.slice(prefix.length)); //declaring folder holding all the JS commands

    if (commandFile) {
        if (cmd.startsWith(prefix)) {
            commandFile.run(bot, msg, args);
        }
    }
})

//Error handling
bot.on("error", console.error);

bot.login(package.token);