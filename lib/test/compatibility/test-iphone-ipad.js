var assert = require('assert'),
utils = require('../utils');


module.exports = {
	'Apple iPhone/iPad - 16%': {
		'Selectors': utils.doesNotContainStylesBatch(

			//BOX
			'box-shadow',

			//TABLE
			'caption-side'),


	}
}