var exampleTree = {
	name: 'root',
	value: 7,
	children: []
}

var exampleTree = {
	name: 'root',
	value: 7,
	children: [
		{
			name: 'hello',
			value: 1,
			children: []
		}
	]
}

var exampleTree = {
	name: 'root',
	value: 7,
	children: [
		{
			name: 'root',
			value: 1,
			children: []
		}
	]
}


var exampleTree = {
	name: 'root',
	value: 7,
	children: [
		{
			name: 'foo',
			value: 1,
			children: [
				{
					name: 'bop',
					value: 11,
					children: []
				},
				{
					name: 'boo',
					value: 9,
					children: []
				}
			]
		},
		{
			name: 'bar',
			value: 3,
			children: []
		},
		{
			name: 'baz',
			value: 6,
			children: [
				{
					name: 'boo',
					value: 3,
					children: []
				},
				{
					name: 'meow',
					value: 9,
					children: [
						{
							name: 'cat',
							value: 3,
							children: []
						}
					]
				},
				{
					name: 'zaza',
					value: 8,
					children: []
				}
			]
		}
	]
}

var nodes = findTreeNodes('boo', exampleTree);
// nodes = [9, 3]

function findTreeNodes(search, tree) {
	// code goes here
}