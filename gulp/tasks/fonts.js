/* ==============================
Move fonts to a specific folder
 ================================ */
module.exports = function () {
	$.gulp.task("fonts", () => {
		return $.gulp
			.src("./source/fonts/**/*.*")
			.pipe($.gulp.dest("./build/fonts/"));
	});
};
