var assert = require('assert'),
utils = require('../utils');


module.exports = {
	'Outlook Express 2007/2010 - 27%': {
		'styles': utils.doesNotContainStylesBatch(


			//TEXT
			'direction',
			'text-overflow',
			'text-shadow',
			'word-spacing',
			'word-wrap',
			'vertical-align',

			//BG
			'background-image',
			'background-position',
			'background-repeat',
			'opacity',
			
			//BOX
			'box-shadow',
			'height',
			'max-width',
			'max-height',

			//POSITION
			'bottom',
			'clear',
			'clip',
			'cursor',
			'display',
			'float',
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
			'list-style-type',

			//TABLE
			'border-spacing',
			'caption-side',
			'empty-cells'),


	}
}