var myvar = 'my value'; 

(function() { 
    console.log(myvar);
    var myvar = 'local value'; 
})();

// var myvar = 'my value'; 

// (function() { 
//		var myvar;
//     console.log(myvar);
//     myvar = 'local value'; 
// })();

console.log('----------------');

var flag = true; 

function test() {
    if(flag) {
        var flag = false;
        console.log('Switch flag from true to false');
    }
    else {
        flag = true;
        console.log('Switch flag from false to true');
    }
}
test();

// var flag = true; 

// function test() {
//		var flag;
//     if(flag) {
//         flag = false;
//         console.log('Switch flag from true to false');
//     }
//     else {
//         flag = true;
//         console.log('Switch flag from false to true');
//     }
// }
// test();

console.log('----------------');

var message = 'Hello world'; 

function saySomething() {
    console.log(message);
    var message = 'Foo bar';
}
saySomething();

// var message = 'Hello world'; 

// function saySomething() {
//		var message;
//     console.log(message);
//     message = 'Foo bar';
// }
// saySomething();


console.log('----------------');

var message = 'Hello world'; 

function saySomething() {
    console.log(message);
    message = 'Foo bar';
}
saySomething();

// var message = 'Hello world'; 

// function saySomething() {
//     console.log(message);
//     message = 'Foo bar';
// }
// saySomething();

console.log('----------------');

function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}

test();

// function test() {
//		var a;
//     function foo() {
//         return 2;
//     }
//     console.log(a);
//     console.log(foo());
//     a = 1;
// }

// test();

console.log('----------------');

(function() {
    console.log(bar);
    foo();

    function foo() {
        console.log('aloha');
    }

    var bar = 1;
    baz = 2;
})();
console.log(baz)

// (function() {
//		var bar;
//     function foo() {
//         console.log('aloha');
//     }

//     console.log(bar);
//     foo();

//     bar = 1;
//     baz = 2;
// })();



console.log('----------------');

var run = false;

function fancy(arg1, arg2) {
    if(run) {
        console.log('I can run');
    }
    else {
        console.log('I can\'t run');
    }

    function run() {
        console.log('Will I run?');
    }
}

fancy();

// var run = false;

// function fancy(arg1, arg2) {
//     function run() {
//         console.log('Will I run?');
//     }
//     if(run) {
//         console.log('I can run');
//     }
//     else {
//         console.log('I can\'t run');
//     }
// }

// fancy();


console.log('----------------');

var run = false;

function fancy(arg1, arg2) {
    if(run) {
        console.log('I can run');
    }
    else {
        console.log('I can\'t run');
    }

    var run = function() {
        console.log('Will I run?');
    }
}
fancy();

// var run = false;

// function fancy(arg1, arg2) {
//		var run;
//     if(run) {
//         console.log('I can run');
//     }
//     else {
//         console.log('I can\'t run');
//     }

//     run = function() {
//         console.log('Will I run?');
//     }
// }
// fancy();