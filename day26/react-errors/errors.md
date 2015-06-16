# Browserify Error { [Error: Cannot find module 'ItemModel' from '/Users/alarner/Projects/TIY/in-class-notes/day26/react-errors/scripts']

The path is wrong when I'm trying to require ItemModel. It's trying to find ItemModel at this path: `/Users/alarner/Projects/TIY/in-class-notes/day26/react-errors/scripts`

To fix: Update the path to point to the correct file: `var ItemModel = require('./models/ItemModel')`



# Browserify Error { [SyntaxError: /Users/alarner/Projects/TIY/in-class-notes/day26/react-errors/scripts/models/ItemModel.js: Unexpected token (9:1) while parsing file: /Users/alarner/Projects/TIY/in-class-notes/day26/react-errors/scripts/models/ItemModel.js]

There's some sort of syntax error in your file `/Users/alarner/Projects/TIY/in-class-notes/day26/react-errors/scripts/models/ItemModel.js` on line `9`.

# Uncaught Error: Invariant Violation: createClass(...): Class specification must implement a `render` method.

Your react component is missing a render method.

# Uncaught Error: Invariant Violation: exports.render(): A valid ReactComponent must be returned. You may have returned undefined, an array or some other invalid object.

I've returned something incorrect from my render function. Either it returns nothing or it returns a non-react component.

# Uncaught TypeError: type.toUpperCase is not a function

checking terminal we see...

# Browserify Error { [SyntaxError: /Users/alarner/Projects/TIY/in-class-notes/day26/react-errors/scripts/components/ItemComponent.js: Unterminated JSX contents (5:29) while parsing file: /Users/alarner/Projects/TIY/in-class-notes/day26/react-errors/scripts/components/ItemComponent.js]

I've forgotten to close a tag in `/Users/alarner/Projects/TIY/in-class-notes/day26/react-errors/scripts/components/ItemComponent.js` on line `5`.

# Uncaught Error: Invariant Violation: _registerComponent(...): Target container is not a DOM element.

You are probably calling React.render and the second argument that you are passing in is not a HTML element or trying to reference an element that doesn't exist.