/*jshint devel:true */
/*global define */
/*global Handlebars */
/*global $ */

define([], function () {
    'use strict';

	console.log('Handlebars is '+Handlebars);

	var dataURL = 'data/shows.json';
	var templateSelector = '#hb-main';

	var source   = $(templateSelector).html();
	var template = Handlebars.compile(source);

	$.ajax({
		url: dataURL,
		success: function(data){
			var html = template(data);
			$(templateSelector).after(html);
		},
		beforeSend: function(jqXHR){
			if (jqXHR.overrideMimeType) {
				jqXHR.overrideMimeType('application/json');
			}
		},
		dataType: 'json'
	});

    return '\'Allo \'Allo!';
});

