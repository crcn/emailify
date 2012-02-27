var assert = require('assert')

module.exports = {
	'Outlook Express 2007-2010': {
		'style': {
			'does not contain box-shadow': function(topic) {
				assert.equal(topic.$('*[cssText*="box-shadow"]').length, 0);
			},
			'dos not contain height': function(topic) {
				assert.equal(topic.$('*[cssText*="height"]').length, 0);
			},
			'does not contain max-width': function(topic) {
				assert.equal(topic.$('*[cssText*="max-width"]').length, 0);
			},
			'does not contain max-height': function(topic) {
				assert.equal(topic.$('*[cssText*="max-height"]').length, 0);
			},
			'does not contain bottom': function(topic) {
				assert.equal(topic.$('*[cssText*="bottom"]').length, 0);
			}
		}
	}
}