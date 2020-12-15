// 👉 Variables
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const scriptsPATH = {
	input: "./source/js/",
	output: "./build/js/",
};

/* ==============================
 👉 SCRIPTS
 ================================ */
module.exports = function () {
	// Development task
	$.gulp.task("js:vendors", () => {
		return $.gulp
			.src([
				scriptsPATH.input + "/vendors/jquery-3.3.1.min.js",
				scriptsPATH.input + "/vendors/slick.min.js",
			])
			.pipe(concat("libs.min.js"))
			.pipe($.gulp.dest(scriptsPATH.output));
	});
	// Development task
	$.gulp.task("js:dev", () => {
		return $.gulp
			.src([
				scriptsPATH.input + "main.js",
				"!" + scriptsPATH.input + "libs.min.js",
			])
			.pipe(
				babel({
					presets: ["@babel/env"],
				})
			)
			.pipe($.gulp.dest(scriptsPATH.output))
			.pipe(
				$.browserSync.reload({
					stream: true,
				})
			);
	});
	// Development task
	$.gulp.task("js:build", () => {
		return $.gulp
			.src([
				scriptsPATH.input + "main.js",
				"!" + scriptsPATH.input + "libs.min.js",
			])
			.pipe(
				babel({
					presets: ["@babel/env"],
				})
			)
			.pipe($.gulp.dest(scriptsPATH.output));
	});
	// Development task
	$.gulp.task("js:min", () => {
		return $.gulp
			.src([
				scriptsPATH.input + "main.js",
				"!" + scriptsPATH.input + "libs.min.js",
			])
			.pipe(
				babel({
					presets: ["@babel/env"],
				})
			)
			.pipe(concat("main.min.js"))
			.pipe(uglify())
			.pipe($.gulp.dest(scriptsPATH.output));
	});
};
