[![build status](https://secure.travis-ci.org/crcn/emailify.png)](http://travis-ci.org/crcn/emailify)
### Emailify makes your html documents a bit more email-safe

This is the node.js version of [premailer](http://premailer.dialect.ca/).

### Features

- Copies `<style />`, and `<link />` data to associated elements.
- Strips out comments by default, but you can optionally keep them, this is useful if you intend to use VML to provide background-images.
- HTML compatibility checking for popular email clients. See:
	- http://www.campaignmonitor.com/css/
	- http://www.campaignmonitor.com/downloads/documents-tools/campaign-monitor-guide-to-css-in-email-sept-2011.pdf
	- http://www.email-standards.org/

### HTML Example

Turns this:

```html
<html>
	<head>
		<style>
			h4 {
				color: #ff6600;
			}
		</style>
	</head>
	<body>
		<h4>orange header</h4>
	</body>
</html>
```

Into this:

```html
<html>
	<head>
	</head>
	<body>
		<h4 style="color: #ff6600;">orange header</h4>
	</body>
</html>
```

### Testing Compatibility Screenshot

![Alt command line](http://i.imgur.com/AUX7z.png)

### Requirements

- [Node.js](http://nodejs.org/)

### Installation

```
npm install emailify -g
```


### Command Line

#### Usage

```
-i [input_html] -o [output_html]

Options:
  -i, --input    [required]
  -o, --output  
  -t, --test     [default: false]
  -c, --comments [default: false]
```

To emailify a document, use this command:

```bash
emailify -i /my/html/file.html -o /my/html/emailified.html
```
If you intend to keep comments, do the following:

```bash
emailify -c true -i /my/html/file.html -o /my/html/emailified.html
```

You can easily test a document for compatibility by adding the `-t` flag:

```bash
emailify -i /my/html/file.html -o /my/html/emailified.html -t
```

Ommit `-o` if you just want to see what emailify produces:

```bash
emailify -i /my/html/file.html
```





### Node.js API

#### .parse(content[, options], callback)

parses html content into email-safe html

- `content` - the html content
- `options`
	- `test` - runs test against code for compatibility


```javascript
var emailify = require('emailify'),
fs           = require('fs')

emailify.parse(fs.readFileSync('/my/email/newsletter.html', 'utf8'), function(err, content) {
	//send newsletter
});
```

#### .load(file[, options], callback)


loads a html file

```javascript
var emailify = require('emailify'),
fs           = require('fs')

emailify.load('/my/email/newsletter.html', { test: true }, function(err, content, warnings) {
	//send newsletter
});
```




