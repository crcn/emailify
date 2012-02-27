var assert = require('assert'),
utils      = require('../utils');

module.exports = {

	'Outlook Express 2000/2003 - 27%': {

		'styles': utils.doesNotContainStylesBatch(

			//TEXT
			'text-shadow',
			'white-space',
			'word-wrap',

			//BG
			'opacity',

			//BOX
			'box-shadow',
			'max-width',
			'max-height',

			//POSITION
			'opacity',
			'outline',

			//TABLE
			'border-spacing',
			'caption-side',
			'empty-cells')

	}

};