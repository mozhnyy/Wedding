/* ==============================
👉 WATCH
 ================================ */
module.exports = function () {
	$.gulp.task("watch", function () {
		$.gulp.watch("./source/pug/**/*.pug", $.gulp.series("pug"));
		$.gulp.watch("./source/styles/**/*.scss", $.gulp.series("styles:dev"));
		$.gulp.watch(
			[
				"./source/images/**/*.{png,jpg,gif,svg}",
				// "./source/images/content/**/*.{png,jpg,gif,svg}",
			],
			$.gulp.series("img:dev")
		);
		$.gulp.watch("./source/images/svg/*.svg", $.gulp.series("svg"));
		$.gulp.watch("./source/js/**/*.js", $.gulp.series("js:dev"));
	});
};
