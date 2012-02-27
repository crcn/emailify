var assert = require('assert'),
utils      = require('../utils');

module.exports = {

	'Apple Mail 4 - 11%': {

		'styles': utils.doesNotContainStylesBatch(

			//BOX
			'box-shadow',

			'caption-side')

	}

};