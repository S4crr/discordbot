const Discord = require('discord.js');
const fs = require('fs');
const token = require('./token');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("The bot is connected!");
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'arrivées-sorties');
    const usersCount = member.guild.members.cache.filter(member => !member.user.bot).size;

    if (!channel) return;

    channel.send(`Bienvenue sur le serveur, ${member} ! Nous sommes à présent ${usersCount}.`);
});

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'arrivées-sorties');
    const usersCount = member.guild.members.cache.filter(member => !member.user.bot).size;

    if (!channel) return;

    channel.send(`${member} est parti. Nous sommes à présent ${usersCount} !`);
});

client.on('message', message => {
    const hotWords = [
        {
            name: 'donjon',
            id: '748245752874270781',
        },
        {
            name: 'raid',
            id: '748245783094231090',
        },
        {
            name: 'nuit noire',
            id: '748245673207398511',
        },
        {
            name: 'assaut',
            id: '748246484885176322',
        },
        {
            name: 'gambit',
            id: '748246124275433493',
        },
        {
            name: 'épreuve',
            id: '748246271222874232',
        },
        {
            name: 'bannière de fer',
            id: '748428314959544421',
        },
        {
            name: 'jugement',
            id: '748428731189559316',
        },
        {
            name: 'osiris',
            id: '748428731189559316',
        },
    ];

    for (var hotWord of hotWords) {
        if (!message.author.bot) {
            if (message.content.toLowerCase().includes(hotWord.name)) {
                if (hotWord.id != message.channel.id) {
                    message.reply(`essaye d'envoyer ce message dans le salon où on parle de ${hotWord.name} !`);
                }
            }
        }
    }

    const prefix = '!';

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
});

client.login(token);