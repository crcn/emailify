module.exports = function(topic, callback) {

	topic.$('link, style').each(function(index, element) {

		element.sheet.cssRules.forEach(callback)

	});

};