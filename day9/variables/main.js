var heightNumber = 5.67;
heightNumber + 0.13;
heightNumber = heightNumber + 0.13;


var name = 'Aaron';
name = 'Sally';

var isBob = name === 'Bob';
var isSally = (name === 'Sally');

var isBob;
var isSally;
if(name === 'Bob') {
	isBob = true;
	isSally = false;
}
else if(name === 'Sally') {
	isBob = false;
	isSally = true;
}
else {
	isBob = false;
	isSally = false;
}