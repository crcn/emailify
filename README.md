### Emailify makes your html documents a bit more email-safe

### Features

- Wopies `<style />`, and `<link />` data to associated elements.
- HTML compatibility checking for popular email clients. Taken from:
	- http://www.campaignmonitor.com/css/
	- http://www.campaignmonitor.com/downloads/documents-tools/campaign-monitor-guide-to-css-in-email-sept-2011.pdf

### Requirements

- [Node.js](http://nodejs.org/)

### Installation

```
npm install emailify -g
```

### TODO 

- see 
	

### Command Line Example

```bash
emailify -i /my/html/file.html -o /my/html/emailified.html
```

### JavaScript Example

```javascript
var emailify = require('emailify'),
fs = require('fs')

emailify.parse(fs.readFileSync('/my/email/newsletter.html', 'utf8'), function(err, content) {
	//send newsletter
});
```

### API

#### .load(file, callback)

loads a html file

### .parse(content, callback)

parses html content into email-safe html


