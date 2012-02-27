var plugin = require('plugin'),
loader     = plugin.loader(),
vows       = require('vows'),
utils      = require('./utils');


module.exports = function(window, options, callback) {

	var subject = vows.describe('Email Compatibility');


	utils.attach(window);

	loader.
	factory(function(plugin) {
		var module;


		if(typeof plugin.plugin == 'function') {
			module = plugin.plugin(window);
		} else {
			module = plugin;
		}

		for(var prop in module) {
			module[prop].topic = window;
		}
		subject.addBatch(module);
	}).
	require(__dirname + "/selectors/**/test-*").
	require(__dirname + "/compatibility/**/test-*").
	load(function() {

		subject.run(options, callback);

	});	

}


