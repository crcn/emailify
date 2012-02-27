var assert = require('assert');

/**
 */
 
exports.attach = function(topic) {

	topic.assertStyle = function(selector, num) {

		assert.equal(topic.$('*[cssText*="' + selector + ':"]').length, num || 0);

	};

};

/** 
 */

exports.doesNotContainStylesBatch = function() {

	var batch = {};

	Array.prototype.slice.apply(arguments).forEach(function(style) {

		batch["does not contain " + style] = function(topic) {

			topic.assertStyle(style);

		};

	});

	return batch;
};