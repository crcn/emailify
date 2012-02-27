var eachCssRule = require('../../eachCssRule'),
assert = require('assert')

module.exports = {
	'Selectors': {
		'are valid': function(topic) {
			eachCssRule(topic, function(rule) {
				try {
					assert.isTrue(!!topic.$(rule.selectorText).length);
				} catch(e) {
					throw new Error('"'+rule.selectorText + '" is invalid');
				}
			});
		}
	}
}