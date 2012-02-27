var fs       = require('fs'),
jsdom        = require('jsdom'),
outcome      = require('outcome'),
EventEmitter = require('events').EventEmitter;


function _copyStyles(window) {
	window.$('link, style').each(function(index, element) {
		element.sheet.cssRules.forEach(function(rule) {

			//selector breaks on stuff like a:hover
			try {
		    	window.$(rule.selectorText).each(function(index, element) {
		    		element.style.cssText += rule.style.cssText;
		    	});
		    } catch(e) {

		    }
	    });

		_strip(window, element);
	});
}

function _strip(window, selector) {
	window.$(element).remove();
}


/**
 * parses content into email-safe HTML
 */

function _parse(content, callback) {

	jsdom.env({
		html: content,
		scripts: [
	  		__dirname + "/jquery-1.5.js"
		],
		done: function(err, window) {

			//first copy the CSS to style attributes - safe for GMAIL
			_copyStyles(window);

			//remove script attributes
			_strip(window, 'script')


			callback(null, window.document.innerHTML)
		}
	});

}

/**
 */

function _load(file, callback) {

	fs.readFile(file, "utf8", outcome.error(callback).success(function(content) {

		_parse(content, callback);

	}));

}


exports.parse = _parse;
exports.load  = _load;