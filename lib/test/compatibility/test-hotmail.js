var assert = require('assert'),
utils     = require('../utils');

module.exports = {

	'Hotmail - 12%': {

		'styles': utils.doesNotContainStylesBatch(

			//BG
			'background-image',
			'background-position',
			'background-repeat',

			//BOX
			'max-width',
			'max-height',

			//POSITION
			'clip',
			'left',
			'z-index',

			//LISTS
			'list-style-image',
			'list-style-position')

	}

};
