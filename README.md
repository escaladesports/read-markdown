# read-markdown

A promise-based module for reading and parsing markdown files.

## Installation

With npm:

```bash
npm install --save read-markdown
```

Or with Yarn:

```bash
yarn add read-markdown
```

## Usage

Just supply a glob or array of glob patterns to your markdown files.

```javascript
var readMarkdown = require('read-markdown')

readMarkdown('./path/to/files/**/*.md')
	.then(function(data){
		console.log(data)
	})
	.catch(console.error)
```

## Options

- `results`: Return results as an object or array. Default `object`
- `html`: Parse the contents as HTML. Default: `true`