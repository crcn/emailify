var assert = require('assert')

var _testers = {
	'selector': function(topic, selector) {
		 var len;

		//don't want jquery to break...
		try {

			len = topic.$(selector).length

		} catch(e) {

			len = 1;

		}


		assert.equal(!!len, true);
	},
	'style': function(topic, selector) {
		assert.equal(topic.$('*[cssText*="' + selector + ':"]').length, 0);
	}
}


module.exports = function(topic) {

	var _batches = {};


	var self = {

		add: function(platform) {

			var name = platform.name,
			testBatch = platform.test;

			for(var testType in testBatch) {

				var batch = testBatch[testType];

				if(!_batches[testType]) {
					_batches[testType] = {};
				}

				for(var i = batch.length; i--;) {

					var test = batch[i];

					if(!_batches[testType][test]) {

						_batches[testType][test] = [];

					}

					_batches[testType][test].push(name);
				}

			}

			return self;
		},


		run: function(callback) {

			var incompatible = [];

			for(var type in _batches) {

				var tests = _batches[type],
				tester    = _testers[type];


				for(var test in tests) {
					try {
						tester(topic, test);
					} catch(e) {

						incompatible.push({
							type: type,
							value: test,
							platforms: tests[test]
						});

					}
				}
			}

			callback(null, incompatible);
		}
	}

	return self;
}