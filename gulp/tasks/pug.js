// 👉 Variables
const plumber = require("gulp-plumber");
const pug = require("gulp-pug");
const cached = require("gulp-cached");

/* ==============================
 👉 PUG
 ================================ */
module.exports = function () {
	$.gulp.task("pug", () => {
		return $.gulp
			.src("./source/pug/*.pug")
			.pipe(plumber())
			.pipe(
				pug({
					pretty: true,
				})
			)
			.pipe(plumber.stop())
			.pipe(cached("pug"))
			.pipe($.gulp.dest("./build/"))
			.on("end", $.browserSync.reload);
	});
};
