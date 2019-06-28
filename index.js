//const Discord = require('discord.js');
//const bot = new Discord.Client();

const commando =  require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random','Random')
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.login('NTg5NTA5NjE5MTAxOTkwOTUz.XQXaWQ.FHj18_fyMwWJUKRM-UU9h2H3g5I');