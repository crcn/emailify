var plugin = require('plugin'),
loader = plugin.loader(),
vows = require('vows');


module.exports = function(window, type, callback) {
	var subject = vows.describe('Email Compatibility');


	loader.
	factory(function(module) {

		for(var prop in module) {
			module[prop].topic = window;
		}
		subject.addBatch(module);
	}).
	require(__dirname + "/" + type + "/**/test-*").
	load(function() {
		
		subject.run({}, function(result) {
			callback(!!result.errored);
		});

	});	
}


