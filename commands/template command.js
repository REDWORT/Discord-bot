
const commando =  require('discord.js-commando');

class command extends commando.Command {
    constructor(cliant){
        super(cliant,{
            name: 'commandhere',
            group: 'commands',
            memberName: 'commandname',
            description: 'description of the command',
        });
    }

    async run(message, args){
        message.reply('print some text')
    }
}

module.exports = command;