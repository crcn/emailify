var fs       = require('fs'),
jsdom        = require('jsdom'),
outcome      = require('outcome'),
test         = require('./test'),
step         = require('step'),
eachCssRule  = require('./eachCssRule'); 



function _copyStyles(window) {
	eachCssRule(window, function(rule) {
		//selector breaks on stuff like a:hover
		
    	window.$(rule.selectorText).each(function(index, element) {
    		element.style.cssText += rule.style.cssText;
    		element.cssText = element.style.cssText;
    	});
	});
}


/**
 * parses content into email-safe HTML
 */

function _parse(content, callback) {

	var on = outcome.error(callback),
	window;

	step(

		function() {
			jsdom.env({
				html: content,
				scripts: [
			  		__dirname + "/jquery-1.5.js"
				],
				done: this
			})
		},


		/**
		 * test the to make sure ALL accessors are accessible 
		 */

		on.success(function(win) {
			window = win;
			test(window, 'stylesheets', this);
		}),

		/**
		 * clean up the HTML - copy css to style
		 */

		on.success(function() {

			//first copy the CSS to style attributes - safe for GMAIL
			_copyStyles(window);

			//remove script attributes
			window.$('script, link, style').remove();

			this();	
		}),

		/**
		 * validate the html against other clients
		 */

		on.success(function() {
			test(window, 'compatibility', this);
		}),


		callback
	)

	/*jsdom.env({
		html: content,
		scripts: [
	  		__dirname + "/jquery-1.5.js"
		],
		done: function(err, window) {



			//first copy the CSS to style attributes - safe for GMAIL
			_copyStyles(window);

			//remove script attributes
			_strip(window, 'script');

			lint(window, function(err, results) {

				callback(null, window.document.innerHTML)
			});

		}
	});*/

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