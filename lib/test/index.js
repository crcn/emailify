var plugin = require('plugin'),
loader = plugin.loader(),
vows = require('vows'),
utils = require('./utils');


module.exports = function(window, options, callback) {

	var subject = vows.describe('Email Compatibility');


	utils(window);

	loader.
	factory(function(module) {
		for(var prop in module) {
			module[prop].topic = window;
		}
		subject.addBatch(module);
	}).
	require(__dirname + "/stylesheets/**/test-*").
	require(__dirname + "/compatibility/**/test-*").
	load(function() {

		subject.run(options, callback);

	});	
}


