require.config({
	paths: {
		app: '../scripts/app',
		jquery: '../bower_components/jquery/jquery',
		handlebars: '../bower_components/handlebars/handlebars'
	},
	shim: {
		handlebars: {
            exports: 'Handlebars'
		},
		app: {
			deps: ['jquery', 'handlebars']
		}
	}
});

require(['jquery', 'handlebars', 'app'], function($, Handlebars, app){
	'use strict';

	// use app here

	console.log(app);
	console.log('Running jQuery %s', $().jquery);
});
