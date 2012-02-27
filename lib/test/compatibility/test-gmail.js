var assert = require('assert'),
utils = require('../utils');


module.exports = {
	'GMail - 7%': {
		'styles': utils.doesNotContainStylesBatch(


			//TEXT
			'word-wrap',

			//BG
			'background-position',
			'background-repeat',
			'opacity',
			
			//BOX
			'box-shadow',

			//POSITION
			'bottom',
			'clip',
			'cursor',
			'display',
			'left',
			'opacity',
			'outline',
			'overflow',
			'position',
			'resize',
			'right',
			'top',
			'visibility',

			//LISTS
			'list-style-image',
			'list-style-position',

			//TABLE
			'border-spacing',
			'caption-side',
			'empty-cells')


	}
}