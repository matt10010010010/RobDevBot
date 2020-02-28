module.exports = {
	name: 'help',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('>>> :computer: Server Commands :computer:\n!help - Opens this menu\n*!updates - Recent Bot Updates');
		message.channel.send('>>> :video_game: Game Commands :video_game: \n*!gameupdates - Shows recent list of updates in that game\n*!codes - Shows a list of codes in game\n*!bugs - Gives a link to the form to report bugs')

	},
};
