var assert = require('assert');

module.exports = function(topic) {

	topic.assertStyle = function(selector, num) {
		assert.equal(topic.$('*[cssText*="'+selector+'"]').length, num || 0);
	}
}