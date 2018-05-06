exports.roll = function (arg)
{
	var pattern = /([0-9])\w+/g;
	var matches = arg.toLowerCase().substring(6, arg.length + 1).match(pattern);

	var finalMessage = '';
	var finalSum = 0;

	for(var i = 0; i < matches.length; i++)
	{
		var numberOfRolls = parseInt(matches[i].substring(0,matches[i].indexOf('d')));
		var numberOfSides = parseInt(matches[i].substring(matches[i].indexOf('d')+1, matches[i].length+1));
		var termSum = 0;
		var thisTermMessage = '';
		thisTermMessage += matches[i] + ' (';
		for(var j = 0; j < numberOfRolls; j++)
		{
			var thisRoll = Math.floor(Math.random() * (numberOfSides - 1)) + 1;
			termSum += thisRoll;
			thisTermMessage += thisRoll.toString();
			if(j == numberOfRolls - 1)
			{
				continue;
			}
			thisTermMessage += ', ';
		}
		thisTermMessage += ')'

		finalSum += termSum;
		finalMessage += thisTermMessage
		if(i == matches.length - 1)
		{
			continue;
		}
		finalMessage += " + ";
	}
	return '**Total:** ' + finalSum + ' = ' + finalMessage;
};

exports.rps = function (arg)
{
	var botChoice = Math.floor(Math.random() * 3);
	
	switch(arg.toLowerCase().substring(5, arg.length + 1))
	{
		case 'rock':
			switch(botChoice)
			{
				case 0:
					return ':fist: & :fist:: It\'s a tie';
				case 1:
					return ':fist: & :newspaper:: You Lose!'
				default:
					return ':fist: beats :scissors:: You win!';
			}
			break;
		case 'paper':
			switch(botChoice)
			{
				case 0:
					return ':newspaper: beats :fist:: You win!';
				case 1:
					return ':newspaper: & :newspaper:: It\'s a tie';
				default:
					return ':newspaper: & :scissors:: You Lose!';
			}
		case 'scissors':
			switch(botChoice)
			{
				case 0:
					return ':scissors: & :fist:: You Lose!';
				case 1:
					return ':scissors: beat :newspaper:: You win!';
				default:
					return ':scissors: & :scissors:: It\'s a tie';
			}
		default:
			switch(botChoice)
			{
				case 0:
					return 'You wanna try that again?';
				case 1:
					return 'Nice try, asshole';
				default:
					return 'Retard alert!';
			}
	}
}

exports.age = function()
{
	var time = process.uptime(); 

	var seconds = Math.floor(time);
	var minutes = 0;
	var hours = 0;
	var days = 0;
	var years = 0;

	while(seconds >= 60)
	{
		seconds -= 60;
		minutes++;
	}
	while(minutes >= 60)
	{
		minutes -= 60;
		hours++;
	}
	while(hours >= 24)
	{
		hours -= 24;
		days++;
	}
	while(days >= 365)
	{
		days -= 365;
		years++;
	}

	var message = '';
	
	if(years > 0)
	{
		message += years + ' year';
		if(years != 1)
			message += 's';
		if(days > 0 || hours > 0 || minutes > 0 || seconds > 0)
			message += ', ';
	}
	if (days > 0)
	{
		message += days + ' day';
		if(days != 1)
			message += 's';
		if(hours > 0 || minutes > 0 || seconds > 0)
			message += ', ';
	}
	if (hours > 0)
	{
		message += hours + ' hour';
		if(hours != 1)
			message += 's';
		if(minutes > 0 || seconds > 0)
			message += ', ';
	}
	if (minutes > 0)
	{
		message += minutes + ' minute';
		if(minutes != 1)
			message += 's';
		if(seconds > 0)
			message += ', ';
	}
	if (seconds > 0)
	{
		if(years > 0 || days > 0 || hours > 0 || minutes > 0)
			message += "& ";
		message += seconds + ' second'
		if(seconds != 1)
			message += 's';
	}
	return message;
}

exports.cpu = function()
{
	return process.cpuUsage();
}

exports.poll = function(arg)
{
	var pattern = /"(.*?)"/g;
	arg = arg.toLowerCase().substring(6, indexOf(' '));
	switch(arg)
	{
		case 'new':
			var newPollName = arg.toLowerCase().substring(11, arg.length+1).match(pattern);
			break;
		case 'vote':
			
			break;
		default:
			return 'Unknown command.For help, type "!help poll"'	
	}
}

exports.kill = function(arg)
{
	//TODO: kill
}

exports.pw = function(length)
{
	var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	var password = '';
	for (var i = 0, n = charset.length; i < length; ++i)
	{
		password += charset.charAt(Math.floor(Math.random() * n));
	}
	return password;
}

function PollData(question, options)
{
	this.question = question;
	this.options = options;
}

function PollOption()
{

}
