
const commando =  require('discord.js-commando');
var gill = 0;
var lv = 1;

let cooldown = new Set()
let cdseconds = 5;

class command extends commando.Command {
    constructor(cliant){
        super(cliant,{
            name: 'hunt',
            group: 'commands',
            memberName: 'findgill',
            description: 'finds some G for the bot',
        });
    }

    async run(message, args){
        var haslvup = false
        if (cooldown.has(message.author.id)){
            message.delete();
            message.reply('wait '+cdseconds+' seconds between commands')
            return;
        }else{
            gill = gill+3
            if (gill >= lv*5.5){
                if (lv < 300){
                    lv = lv+1
                    gill = 0
                }else{
                    message.reply('Bot is now max level and wont go any higher,') 
                }
            }
            message.reply(' +3 Gill\n\tBot Level;\nBot Level: '+lv+',\nBot Gill: '+gill+'/'+lv*5.5+'\n'+Math.floor((gill/(lv*5.5))*100)+'%')
        }
        cooldown.add(message.author.id);
        setTimeout(() => {
            cooldown.delete(message.author.id)
        }, cdseconds*1000)

    }
}

module.exports = command;