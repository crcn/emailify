var eachCssRule = require('../../eachCssRule'),
assert = require('assert'),
sprintf = require('sprintf').sprintf

module.exports = {
	'Selectors': {
		'are valid': function(topic) {
			eachCssRule(topic, function(rule) {
				assert.isTrue(!!topic.$(rule.selectorText).length, sprintf('"%s" is invalid', rule.selectorText.bold));
			});
		}
	}
}