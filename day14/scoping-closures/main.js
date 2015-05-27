// (function() {
// 	var $ = 'hello world';
// 	// console.log(test);
// 	console.log('hello '+name)
// })();

// console.log(window);

// $(document).on('ready', function() {
// 	var test = 'hello';
// });


// (function() {
// 	function start() {
// 		console.log('let\'s begin');
// 	}

// 	start();
// 	start();
// })();

// function start() {
//     var name = 'Sam Smith';

//     function foo(test) {
//         var fooTest = 'Facebook';
//         console.log(test+' '+name);
//     }

//     function bar() {
//         console.log(test+' '+name);
//         console.log(fooTest);   // fooTest is not available here
//     }

//     foo('hi');
// }

// console.log(window);

// foo('blah');        // foo is not avaibable here
// console.log(name)   // either is name

// start();

(function() {

	// var nodes = document.getElementsByTagName('button');
	// for(var i = 0; i < nodes.length; i++) {
	// 	(function(num) {
	// 		nodes[num].addEventListener('click', function() {
	// 			console.log('You clicked element #' + num);
	// 		});
	// 	})(i);
	// }


	// function makeFunc() {
	// 	var name = "Pandora";
	// 	function displayName() {
	// 		console.log(name);
	// 	}
	// 	return displayName;
	// }

	// var myFunc = makeFunc();
	// myFunc();

	var counter = 0;

	var nodes = document.getElementsByTagName('button');
	for(var i = 0; i < nodes.length; i++) {
		nodes[i].addEventListener('click', function() {
			counter++;
			console.log(counter);
		});
	}


})();
















