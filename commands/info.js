module.exports = {
	name: 'info',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Hi.');
	},
};
