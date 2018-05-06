const cmds = require('./cmds');
const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDQxMDI5NzEwMjMxODk2MDc1.Dcu0Uw.Xe5RmOQqu-99TFNbigkcGE4r94Y';
const prefix = '!';

client.on('ready', () =>
{
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg =>
{
	if (msg.content.startsWith(prefix))
	{
		switch (msg.content.toLowerCase().substring(1, msg.content.indexOf(' ', 1)))
		{
			case 'roll':
				msg.reply(cmds.roll(msg.content));
				break;
			case 'rps':
				msg.reply(cmds.rps(msg.content));
				break;
			case 'age':
				msg.reply(cmds.age());
				break;
			case 'kill':
				msg.reply(cmds.kill());
				break;
			default:
				msg.reply('Unknown command. For help, type "!help"');
				break;
		}
	}
});

client.login(token);


//!
//  roll
//      XdY
//  rps
//      hand
//  uptime
//		_
//		seconds
//		minutes
//		hours
//		days
//  kill
//      password
//  poll
//      new
//          name
//          option 1
//          option 2
//			...
//		vote
//			choice
//	help
//		roll
//		rps
//		uptime
//		kill
//		poll
