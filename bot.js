const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json')

const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		client.commands.get('ping').execute(message, args);
	} else if (command === 'info') {
		client.commands.get('info').execute(message, args);
	} else if (command === 'help') {
    client.commands.get('help').execute(message, args);
  } else if (command === 'updates') {
		client.commands.get('updates').execute(message, args);
	} else if (command === 'gameupdates') {
		client.commands.get('gameupdates').execute(message, args);
	} else if (command === 'codes') {
		client.commands.get('codes').execute(message, args);
	} else if (command === "bugs") {
		client.command.get('help').execute(message, args)
	} else if (command === 'serverinfo') {
		client.command.get('serverinfo').execute.(message, args)
	}
	// do the same for the rest of the commands...
});

client.login(process.env.BOT_TOKEN)
