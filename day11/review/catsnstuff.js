var cats = [
	'tabby',
	'gray',
	'calico',
	'lion',
	'lynx',
	'tiger',
	'liger'
];

// var catsString = '';

// for(var i=0; i<cats.length; i++) {
// 	// var catsString = '';
// 	catsString = catsString + '<div>' + cats[i] + '</div>';
// }

// console.log(catsString);
var catsString = '<div>' + cats.join('</div><div>') + '</div>';
console.log(catsString);

document.getElementById("catList").innerHTML=catsString;