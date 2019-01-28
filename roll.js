const _ = require("lodash");
const Discord = require("Discord.js");

module.exports.run = async(bot, message, args) => {
    console.log(`Roll attempted.`);
        if (args[0].toLowerCase() == "help")
        message.channel.send(`Here's the dice you can roll:
        D4: Four-sided dice
        D6: Six sided dice
        D8: Eight sided dice
        D10: 10 sided dice
        D00: 10 percentile dice
        D12: 12 sided dice
        D20: 20 sided dice
        D30: 30 sided dice
        D100: A dice that rolls to 100

        You call it like this:
        !roll d4 d8 d4 d20
        `)
        else {
        args.forEach((args) => {
            switch(args.toLowerCase()) {
                //D4 Dice
                //First rolls to a dice face, then rolls which number is right side up
                case "d4":
                let d4DiceFace = _.random(1, 4);
                switch(d4DiceFace) {
                    case 1:
                    switch(_.sample([1, 2, 3])) {
                        case 1:
                        message.channel.send(`1!`);
                        break;

                        case 2:
                        message.channel.send(`2!`);
                        break;

                        case 3:
                        message.channel.send(`3!`);
                        break;
                    }
                    break;

                    case 2:
                    switch(_.sample([1, 2, 4])) {
                        case 1:
                        message.channel.send(`1!`);
                        break;

                        case 2:
                        message.channel.send(`2!`);
                        break;

                        case 4:
                        message.channel.send(`4!`);
                        break;
                    }
                    break;

                    case 3:
                    switch(_.sample([1, 3, 4])) {
                        case 1:
                        message.channel.send(`1!`);
                        break;

                        case 3:
                        message.channel.send(`3!`);
                        break;

                        case 4:
                        message.channel.send(`4!`);
                        break;
                    }
                    break;

                    case 4:
                    switch(_.sample([2, 3, 4])) {
                        case 2:
                        message.channel.send(`2!`);
                        break;

                        case 3:
                        message.channel.send(`3!`);
                        break;

                        case 4:
                        message.channel.send(`4!`);
                        break;
                    }
                    break;
                }
                break;
                
                //D6 dice (Regular 1 - 6 dice)
                case "d6":
                message.channel.send(_.random(1, 6) + `!`);
                break;

                //D8 dice (1 - 8 on each face)
                case "d8":
                message.channel.send(_.random(1, 8) + `!`);
                break;

                //D10 dice (1 - 12 on each face)
                case "d10":
                message.channel.send(_.random(0, 9) + `!`);
                break;

                //D12 dice (1 - 12 on each face)
                case "d12":
                message.channel.send(_.random(1, 12) + `!`);
                break;

                //D20 dice (1 - 20 on each face)
                case "d20":
                message.channel.send(_.random(1, 20) + `!`);
                break;

                //D30 dice (1 - 30 on each face)
                case "d30":
                message.channel.send(_.random(1, 30) + `!`);
                break;

                //D100 dice (1 - 100 after adding up 2 sides)
                case "d100":
                switch (_.sample([0, 10 , 20, 30, 40, 50, 60 ,70, 80, 90])) {
                    case 0:
                    //If a 0 is rolled on the digit
                    let singleDigitRoll = _.random(0, 10);
                    if (0 + singleDigitRoll == 0)
                    message.channel.send(`0!`);
                    else
                    message.channel.send(singleDigitRoll + `!`);
                    break;

                    case 10:
                    message.channel.send((_.random(0, 9) + 10) + `!`);
                    break;

                    case 20:
                    message.channel.send((_.random(0, 9) + 20) + `!`);
                    break;

                    case 30:
                    message.channel.send((_.random(0, 9) + 30) + `!`);
                    break;

                    case 40:
                    message.channel.send((_.random(0, 9) + 40) + `!`);
                    break;

                    case 50:
                    message.channel.send((_.random(0, 9) + 50) + `!`);
                    break;

                    case 60:
                    message.channel.send((_.random(0, 9) + 60) + `!`);
                    break;

                    case 70:
                    message.channel.send((_.random(0, 9) + 70) + `!`);
                    break;

                    case 80:
                    message.channel.send((_.random(0, 9) + 80) + `!`);
                    break;

                    case 90:
                    message.channel.send((_.random(0, 9) + 90) + `!`);
                    break;
                }
                break;

                case "d00":
                message.channel.send(_.sample([0, 10 , 20, 30, 40, 50, 60 ,70, 80, 90, 100]) + `!`);
                break;

                // case "dice":
                // message.channel.send("I'm guessing you want a regular one... roll " + _.random(1, 6) + "!");
                
                default:
                message.channel.send(`Hey! that's not a dice!`);
            }
        });
    }
}


module.exports.help = {
    name : "roll"
}