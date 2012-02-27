var assert = require('assert'),
utils = require('../../utils');


module.exports = {
	'Outlook Express 2007-2010': utils.doesNotContainStylesBatch('box-shadow','height','max-width','max-height','bottom')
}