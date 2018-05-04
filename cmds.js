exports.roll = function (arg)
{
	var pattern = new RegExp("([1-9]\\d*)?d([1-9]\\d*)([/x][1-9]\\d*)?([+-]\\d+)?");
	var matches = arg.toLowerCase().substring(6,arg.length+1).match(pattern);
	return matches.length;
};

//useful regs
//*


// exports.roll = function (arg)
// {
// 	var numberOfRolls = parseInt(arg.substring(6,arg.toLowerCase().indexOf('d')));
// 	var numberOfSides = parseInt(arg.substring(arg.toLowerCase().indexOf('d') + 1, arg.substring(arg.toLowerCase().indexOf('+') - 1)));
// 	var sum = 0;
// 	var total = '(';
// 	console.log(numberOfRolls+'d'+numberOfSides);
// 	console.log(arg.substring(arg.toLowerCase().indexOf('d') + 1, arg.substring(arg.toLowerCase().indexOf('+') - 1)));
// 	for (var i = 0; i < numberOfRolls; i++)
// 	{
// 		var thisRoll = rand(1, numberOfSides);
// 		sum += thisRoll;
// 		total += thisRoll + '';
// 		if(i == numberOfRolls - 1)
// 		{
// 			continue;
// 		}
// 		total += ', ';
// 	}
// 	total += ')';
// 	return '**Total:** ' + sum + ' ' + total;
// };

exports.rps = function (arg)
{
	var botChoice = rand()

	console.log(botChoice);
	
	arg = arg.toLowerCase().substring(5, arg.length + 1);
	switch(arg)
	{
		case 'rock':
			switch(botChoice)
			{
				case '0':
					return 'rock vs rock: It\'s a tie';
					break;
				case '1':
					return 'rock vs paper: I win!'
					break;
				default:
					return 'rock vs scissors: You win!';
					break;
			}
			break;
		case 'paper':
			switch(botChoice)
			{
				case '0':
					return 'paper vs rock: You win!';
					break;
				case '1':
					return 'paper vs paper: It\'s a tie';
					break;
				default:
					return 'paper vs scissors: I win!';
					break;
			}
			break;
		case 'scissors':
			switch(botChoice)
			{
				case '0':
					return 'scissors vs rock: I win!';
					break;
				case '1':
					return 'scissors vs paper: You win!';
					break;
				default:
					return 'scissors vs scissors: It\'s a tie';
					break;
			}
	}
}

exports.uptime = function()
{
	var time = process.uptime();
	var days = Math.floor(time/86400);
	var hours = Math.floor(time/3600);
	var minutes = Math.floor(time/60);
	var seconds = Math.floor(time);
	var result = seconds + ' secs ';
	if(seconds > 60)
	{
		seconds %= 60;
		minutes += Math.floor(seconds/60);
	}
	if(minutes > 60)
	{
		minutes %=60;
		hours += Math.floor(minutes/60);
	}
	if(hours > 24)
	{
		hours %= 24;
		days += Math.floor(hours/60);
	}
	if(minutes > 0)
	{
		result += (', ' + minutes + 'mins, ');
		if(hours > 0)
		{
			result += (', ' + hours + 'hrs, ');
			if(days > 0)
			{
				result += (', ' + days + 'days');
			}
		}
	}
	return result;
}

exports.rand = function(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}
