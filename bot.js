let Bot = require('discord-bot');

require('./reactions');
let feed =require('feed-read')
let params = require('./parameters.json');


let bot = new Bot({
    email: params.email,
    password: params.password
});
console.log("Demarrage du bot...");

let latruite = "240475080851718144";


let RSSFEED_BM = "http://dites.bonjourmadame.fr/rss";


function sendMadame(random) {
    feed(RSSFEED_BM, function (err, articles) {
        index = 0;
        if (random) {
            index = Math.floor(Math.random() * (articles.length - 1));
        }
        let re = /<img[^>]+src="(http*:\/\/[^">]+)"/g;
        let results = re.exec(articles[index].content);
        let madame = results[1];

        bot.sendMessage(latruite, madame)
    });
}


bot
    .on(bot.triggers.now)
    .do(function () {
        //salut la truite
        //bot.sendMessage("240475080851718144", "coucou les truites")
        //salut botconfig
        bot.sendMessage("301263305698312192", "coucou botconfig")
    });

bot
    .on(bot.triggers.react, 'java')
    .do(function () {
        this.reply('java tue.');
    });


bot
    .on(bot.triggers.react, 'poisson')
    .do(function () {
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
        console.log("salut");
        this.reply('ta gueule.');
    });


//########################################## PAUSES/FIN ##################################################

//pause matin
bot
    .on(bot.triggers.cron, '0 10 * * 1-5 * (0 10 * * Mon-Fri *)')
    .do(function (bot, conf, args) {
        bot.sendMessage("240475080851718144", "C'est la pause les cons.")
        // do stuff
    });


bot
    .on(bot.triggers.cron, '12 11 * * 1-5 * (0 12 * * Mon-Fri *)')
    .do(function () {
        bot.sendMessage("240475080851718144", "test")
        console.log("j'ai faim")
        // do stuff
    });


//prépause matin
bot
    .on(bot.triggers.cron, '45 9 * * 1-5 *')
    .do(function () {
        bot.sendMessage("240475080851718144", "Prépause.")
        // do stuff
    });

//fin matin
bot
    .on(bot.triggers.cron, '15 12 * * 1-5 *')
    .do(function () {
        bot.sendMessage("240475080851718144", "C'est fini. Go boubou !")
        // do stuff
    });

//préfin matin
bot
    .on(bot.triggers.cron, '00 12 * * 1-5 *')
    .do(function () {
        bot.sendMessage("240475080851718144", "Préfaim.")
        // do stuff
    });


//pause aprem
bot
    .on(bot.triggers.cron, '30 15 * * 1-5 *')
    .do(function () {
        bot.sendMessage("240475080851718144", "C'est la pause les cons.")
        // do stuff
    });

//prépause aprem
bot
    .on(bot.triggers.cron, '15 15 * * 1-5 *')
    .do(function () {
        bot.sendMessage("240475080851718144", "Prépause.")
        // do stuff
    });


//############################
bot
    .on(bot.triggers.cron, '0 11 * * 1-5 *')
    .do(function () {
        bot.sendMessage("240475080851718144", "J'ai faim.")
        // do stuff
    });


//fin aprem
bot
    .on(bot.triggers.cron, '30 17 * * 1-5 *')
    .do(function () {
        bot.sendMessage("240475080851718144", "C'est fini. Cassez-vous. Sauf les IA hahaha")
        // do stuff
    });

//préfin aprem
bot
    .on(bot.triggers.cron, '15 17 * * 1-5 *')
    .do(function () {
        bot.sendMessage("240475080851718144", "Préfin. Rangez vos affaires, ctrl+s et on oublie pas de commit tas de larves.")
        // do stuff
    });

//########################################## COMMANDES ##################################################

bot
    .on(bot.triggers.react, 'help')
    .do(function () {
        this.reply('Ah, un blaireau qui veut me parler. Du coup, voilà les commandes auxquelles je réagis :' +
            '\n!coucou,' +
            '\n!finger, ' +
            '\n!java, ' +
            '\n!poisson. ' +
            '\nTu es un pervers ? Bienvenue  ! Tu peux dès lors taper les deux commandes suivantes pour éclairer ta journée : ' +
            '\n!bm, ' +
            '\n!randbm, ' +
            '\nEt n\'oublie pas bien sur un bon vieux !jaimetamere.');
    });





//###############################BONJOUR MADAME#############################

bot
    .on(bot.triggers.command, 'randbm')
    .do(function () {
        console.log("displaying madame")
        sendMadame(true)

    });

bot
    .on(bot.triggers.command, 'bm')
    .do(function () {
        console.log("displaying madame");
        sendMadame(false)

    });


//#############################################################################



bot.connect(function () {
    console.log("ok")


});