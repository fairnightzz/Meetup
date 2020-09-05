const Discord = require('discord.js');
const config = require('./config.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('dsa');
	console.log('Ready!');
});

client.login(config.token);