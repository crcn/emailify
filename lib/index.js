var fs       = require('fs'),
jsdom        = require('jsdom'),
outcome      = require('outcome'),
test         = require('./test'),
step         = require('step'),
eachCssRule  = require('./eachCssRule');

function _copyStyles(window) {

	eachCssRule(window, function(rule) {
		try {
			window.$(rule.selectorText).each(function(index, element) {

				element.style.cssText += rule.style.cssText;
				element.cssText        = element.style.cssText;

			});
		} catch(e) {

		}

	});

}

/**
 * parses content into email-safe HTML
 */

function _parse(content, options, callback) {

	if(typeof options == 'function') {

		callback     = options;
		options.test = false;

	}


	var on = outcome.error(callback),
	warnings,
	window;

	step(

		/**
		 * load it.
		 */

		function() {

			jsdom.env({
				html: content,
				scripts: [
			  		__dirname + "/jquery-1.5.js"
				],
				done: this
			});

		},


		/**
		 * set it.
		 */

		on.success(function(win) {


			window = win;
			_copyStyles(window);
			this();

		}),

		/**
		 * test it.
		 */

		on.success(function() {

			if(!options.test) {

				return this();

			}

			test(window, {}, this);

		}),

		/**
		 * clean it.
		 */

		on.success(function(warn) {

			warnings = warn;

			//strip stuff that cannot be processed
			window.$('script, link, style').remove();

            if (!options.comments) {
                //strip comments - sometimes gets rendered
                window.$('*').contents().each(function(node) {
                    if(this.nodeType == 8) {
                        window.$(this).remove();
                    }
                });
            }

			this();

		}),


		/**
		 * finish it.
		 */

		function(html) {

			callback(null, window.document.innerHTML, warnings || []);

		}
	);


}

/**
 */

function _load(file, options, callback) {

	if(typeof options == 'function') {

		callback = options;
		options  = {};

	}

	fs.readFile(file, "utf8", outcome.error(callback).success(function(content) {

		_parse(content, options, callback);

	}));

}

exports.parse = _parse;
exports.load  = _load;
