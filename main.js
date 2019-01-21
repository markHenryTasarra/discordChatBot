//Dependancies
const discord = require('discord.js');
const fs = require('fs');

//
const package = require('package.json');
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
})