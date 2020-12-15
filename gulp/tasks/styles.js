// 👉 Variables
const plumber = require("gulp-plumber");
const scss = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const csscomb = require("gulp-csscomb");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const qcmq = require("gulp-group-css-media-queries");
const stylesPATH = {
	input: "./source/styles/",
	output: "./build/css/",
};

/* ==============================
👉 STYLES
 ================================ */
module.exports = function () {
	// task
	$.gulp.task("styles:dev", () => {
		return $.gulp
			.src(stylesPATH.input + "styles.scss")
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(scss())
			.pipe(
				autoprefixer({
					overrideBrowserslist: ["last 3 versions"],
				})
			)
			.pipe(sourcemaps.write())
			.pipe(rename("styles.css"))
			.pipe($.gulp.dest(stylesPATH.output))
			.on("end", $.browserSync.reload);
	});
	// task
	$.gulp.task("styles:build", () => {
		return $.gulp
			.src(stylesPATH.input + "styles.scss")
			.pipe(scss())
			.pipe(
				autoprefixer({
					overrideBrowserslist: ["last 3 versions"],
				})
			)
			.pipe(autoprefixer())
			.pipe(qcmq())
			.pipe(csscomb())
			.pipe(rename("styles.css"))
			.pipe($.gulp.dest(stylesPATH.output));
	});
	// task
	$.gulp.task("styles:min", () => {
		return $.gulp
			.src(stylesPATH.input + "styles.scss")
			.pipe(scss())
			.pipe(autoprefixer())
			.pipe(qcmq())
			.pipe(csscomb())
			.pipe(csso())
			.pipe(rename("styles.min.css"))
			.pipe($.gulp.dest(stylesPATH.output));
	});
};
