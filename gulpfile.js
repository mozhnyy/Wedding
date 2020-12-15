"use strict";

global.$ = {
	path: {
		task: require("./gulp/path/tasks.js"),
	},
	gulp: require("gulp"),
	browserSync: require("browser-sync").create(),
	del: require("del"),
};

$.path.task.forEach(function (taskPath) {
	require(taskPath)();
});

$.gulp.task(
	"dev",
	$.gulp.series(
		"clean",
		$.gulp.parallel(
			"pug",
			"fonts",
			"styles:dev",
			"img:dev",
			"js:vendors",
			"js:dev"
			// "svg"
		)
	)
);

$.gulp.task(
	"prod",
	$.gulp.series(
		"clean",
		$.gulp.parallel(
			"pug",
			"fonts",
			"styles:min",
			"img:build",
			"js:vendors",
			"js:min"
		),
		$.gulp.parallel("styles:build", "js:build")
	)
);

$.gulp.task("default", $.gulp.series("dev", $.gulp.parallel("watch", "serve")));
