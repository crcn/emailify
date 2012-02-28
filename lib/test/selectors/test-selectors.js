var eachCssRule = require('../../eachCssRule'),
assert = require('assert'),
sprintf = require('sprintf').sprintf

exports.plugin = function(topic) {

	var batch = [];

		eachCssRule(topic, function(rule) {

			batch.push(rule.selectorText);

		});


	return {

		'name': 'all clients',
		'test': {
			'selector': batch
		}

	};

};