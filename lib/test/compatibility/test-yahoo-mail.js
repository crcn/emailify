var assert = require('assert'),
utils      = require('../utils');

module.exports = {

	'Yahoo! Mail - 9%': {

		'styles': utils.doesNotContainStylesBatch(

			//BG
			'background-image',
			'background-position',
			'background-repeat',
			'opacity',

			//BOX
			'box-shadow',

			//POSITION
			'bottom',
			'clip',
			'opacity',
			'outline',
			'overflow',
			'position',
			'resize',
			'right',
			'top',
			'z-index')

	}
	
};