module.exports = {
    name: 'anecdote',
    description: 'This is an anecdote command!',
    execute(message, args) {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        const anecdotes = [
            "Ana Bray n'a pas toujours été une Bray, elle a en réalité été adopté.",
            "Au tout début de Destiny 2, quand Ghaul s'ammène avec ses cabals, c'est un agent des neufs qui a dissimulé leur présence pour voir s'il étaient capables de voler la lumière !",
            "Le Vagabond et plein d'autres avaient laisser penser que les Gardiens pourraient un jour utiliser les ténèbres pour vaincre les ennemis il y a de cela un peu plus d'un an. Quel visionnaire ce Vagabond !",
            "Les traductions en français des cinématiques est parfois foireuse et pas correcte du tout !",
            "Certaines races de l'univers de Destiny 2 ont conscience qu'ils sont dans un jeu vidéo. Certaines descriptions d'armures le prouvent !",
        ];
        const index = getRandomInt(anecdotes.length);

        message.channel.send(anecdotes[index]);
    }
};