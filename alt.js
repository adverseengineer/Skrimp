const Discord = require('discord.js');
const client = new Discord.Client();

var user_pool = [];
client.on('ready', () => {
	console.log("I am bot bot");
});
client.on('message', msg => {
	if(msg.content === "!DxY") {
		setInterval(clear_array(), 60000); // clear array every 60 seconds
		for(var i = 0; i < user_pool.length; i++) {
			dice_roll(user_pool[i]);
			
		} 		
	}
});

function clear_array() {
	user_pool = 0;
}
function dice_roll(user) {
	// generate 2 numbers
	var number1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
	var number2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
	return(user + "'s numbers are: " + number1 + " and " + number2);
}