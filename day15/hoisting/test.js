var newFunction;
var start = new Date();
for(var i=0; i<1000000000; i++) {
	newFunction = function() {
		var foo = 1+1;
		var bar = 2+2;
		function inside() {
			console.log('test');
		}
	}
}
var end = new Date();
console.log(end.getTime() - start.getTime());