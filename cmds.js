exports.roll = function (arg)
{
	var numberOfRolls = parseInt(arg.substring(6,arg.toLowerCase().indexOf('d')));
	var numberOfSides = parseInt(arg.substring(arg.toLowerCase().indexOf('d')+1, arg.length+1));
	var sum = 0;
	var total = '(';
	console.log(numberOfRolls+'d'+numberOfSides);
	for (var i = 0; i < numberOfRolls; i++)
	{
		var thisRoll = 1 + Math.floor(Math.random() * numberOfSides);
		sum += thisRoll;
		total += thisRoll + '';
		if(i == numberOfRolls - 1)
		{
			continue;
		}
		total += ', ';
	}
	total += ')';
	return '**Total:** ' + sum + ' ' + total;
};
