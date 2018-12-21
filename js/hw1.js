var img = 'default';
var question = prompt('Color?');
var phones = [
{
	'color': 'black'
},
{
	'color': 'gold'
},
{
	'color': 'silver'
}
];

for(var i = 0; i < phones.length; i++){
	if(phones[i].color == question) {
		img = phones[i].color;}
}
var price = prompt('Memory?');
var price_def = 'Not Found';
var prices = [
	{
		'memory': '16',
		'price': 10000
	},
	{
		'memory': '32',
		'price': 15000
	},
	{
		'memory': '64',
		'price': 20000
	}
]
for(var i = 0; i < prices.length; i++){
	if(prices[i].memory == price) {
		price_def = prices[i].price;
	}
}
document.write('<img id="phone_color" src="img/'+img+'.png"/><br/><span>'+ price_def +'</span>');