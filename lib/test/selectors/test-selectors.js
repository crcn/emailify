var eachCssRule = require('../../eachCssRule'),
assert = require('assert'),
sprintf = require('sprintf').sprintf

exports.plugin = function(topic) {

	var batch = {};

		eachCssRule(topic, function(rule) {

			batch[sprintf('"%s" validity', rule.selectorText.bold)] = function(topic) {

				var len


				//don't want jquery to break...
				try {

					len = topic.$(rule.selectorText).length

				} catch(e) {

					len = 1;

				}

				assert.isTrue(!!len);

			}

		});


	return {

		'Style Selectors': batch

	};

};