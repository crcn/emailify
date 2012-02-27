var assert = require('assert'),
utils = require('../../utils');




/*
{
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
*/
module.exports = {
	'Outlook Express 2007-2010': utils.doesNotContainStylesBatch('box-shadow','height','max-width','max-height','bottom')
}