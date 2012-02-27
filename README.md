### Emailify makes your html documents a bit more email-safe

### Features

- associated style sheets to dom elements


### TODO 

- warnings for elements not compatible with some email clients
- command line
- see http://www.campaignmonitor.com/css/


### Example

```javascript
var emailify = require('emailify'),
fs = require('fs')

emailify.parse(fs.readFileSync('/my/email/newsletter.html', 'utf8'), function(err, content) {
	//send newsletter
});


//TODO
var parser = emailify.parse(fs.readFileSync('/my/email/newsletter.html', 'utf8'));

parser.on('complete', function() {
	
});

parser.on('warning', function(message) {
	
});

parser.on('error', function(message) {
	
});

```

### API

#### .load(file, callback)

loads a html file

### .parse(content, callback)

parses html content into email-safe html


