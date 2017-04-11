let Bot = require('discord-bot');
require('./reactions');
let params = require('./parameters.json');


let bot = new Bot({
    email: params.email,
    password: params.password
});
console.log("Demarrage du bot...");


bot
    .on(bot.triggers.now)
    .do(function () {
        console.log("Coucou les cons")
    });

bot
    .on(bot.triggers.react, 'java')
    .do(function () {
        this.reply('java tue.');
    });


bot
    .on(bot.triggers.react, 'poisson')
    .do(function (bot) {
        this.reply('le gros poisson qui nique des mères');
    });

bot
    .on(bot.triggers.react, /j\'aime ta mere|j\'aime ta mère|J\'aime ta mère|J\'aime ta mere/)
    .do(function () {
        this.reply(' moi aussi :eggplant:');
    });

bot
    .on(bot.triggers.react, 'finger')
    .do(function () {
        this.reply('tiens ducon : :middle_finger:');
    });

bot
    .on(bot.triggers.react, /coucou|salut|hey|yop|bonjour/)
    .do(function () {
        console.log("salut")
        this.reply('ta gueule.');
    });

bot
    .on(bot.triggers.react, 'help')
    .do(function () {
        this.reply('Ah, un blaireau qui veut me parler. Du coup, voilà les commandes auxquelles je réagis :\n!coucou,\n!finger, \n!java, \n!poisson, \n!jaimetamere');
    });


bot.connect(function () {
    console.log("ok")
});