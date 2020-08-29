module.exports = {
    name: 'hello',
    description: 'This is a hello message!',
    execute(message) {
        if (message.content.toLowerCase().includes('salut')) {
            message.channel.send(`Salut à toi ${message.author} !`);
        } else {
            message.reply("Hey mais qu'est ce que tu me veux toi ?");
        }
    }
};