

var plugin = require('plugin'),
loader     = plugin.loader(),
suite      = require('./suite');

require('colors');

module.exports = function(window, options, callback) {

	var subject = suite(window);
	try {

	loader.
	factory(function(plugin) {

		var module;

		if(typeof plugin.plugin == 'function') {

			module = plugin.plugin(window);

		} else {

			module = plugin;

		}



		subject.add(module);

	}).
	require(__dirname + "/selectors/**/test").
	require(__dirname + "/compatibility/**/test").
	load(function() {

		subject.run(callback);

	});	
}catch(e) {
	console.log(e.stack)
}

};


