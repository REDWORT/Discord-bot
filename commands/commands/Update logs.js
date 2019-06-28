const commando =  require('discord.js-commando');

class command extends commando.Command {
    constructor(cliant){
        super(cliant,{
            name: 'getlogs',
            group: 'commands',
            memberName: 'getlogs',
            description: 'Gets logs of Underfighters2'
        });
    }

    async run(message, args){
        message.reply('Latest logs of Underfighters2;\n\n\tUpdate 1.8.9\tUpdated: Thu 20 Jun\n%Celestial items\n%immorteless boss\n%new menu layout\n%new codes\n%Dummy trials\n')
    }
}

module.exports = command;


