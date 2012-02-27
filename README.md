### Emailify makes your html documents a bit more email-safe

### Features

- Copies `<style />`, and `<link />` data to associated elements.
- HTML compatibility checking for popular email clients. See:
	- http://www.campaignmonitor.com/css/
	- http://www.campaignmonitor.com/downloads/documents-tools/campaign-monitor-guide-to-css-in-email-sept-2011.pdf



### Requirements

- [Node.js](http://nodejs.org/)

### Installation

```
npm install emailify -g
```


### Command Line

```bash
emailify -i /my/html/file.html -o /my/html/emailified.html
```

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


### API

#### .load(file, callback)



loads a html file

#### .parse(content, callback)

parses html content into email-safe html

```javascript
var emailify = require('emailify'),
fs = require('fs')

emailify.parse(fs.readFileSync('/my/email/newsletter.html', 'utf8'), function(err, content) {
	//send newsletter
});


