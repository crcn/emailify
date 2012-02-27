var assert = require('assert')

module.exports = {
	'Outlook Express 2007-2010': {
		'style': {
			'does not contain box-shadow': function(topic) {
				topic.assertStyle('box-shadow');
			},
			'dos not contain height': function(topic) {
				topic.assertStyle('height');
			},
			'does not contain max-width': function(topic) {
				topic.assertStyle('max-width');
			},
			'does not contain max-height': function(topic) {
				topic.assertStyle('max-height');
			},
			'does not contain bottom': function(topic) {
				topic.assertStyle('bottom');
			}
		}
	}
}