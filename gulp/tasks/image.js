// 👉 Variables
const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache");
const imgCompress = require("imagemin-jpeg-recompress");
const imgPATH = {
	input: ["./source/images/**/*.{png,jpg,gif,svg}", "!./source/images/svg/*"],
	output: "./build/images/",
};

/* ==============================
 👉 IMAGES
 ================================ */
module.exports = function () {
	// Move images to specified path
	$.gulp.task("img:dev", () => {
		return $.gulp.src(imgPATH.input).pipe($.gulp.dest(imgPATH.output));
	});

	// Compress images
	$.gulp.task("img:build", () => {
		return $.gulp
			.src(imgPATH.input)
			.pipe(
				cache(
					imagemin([
						imgCompress({
							loops: 4,
							min: 70,
							max: 80,
							quality: "high",
						}),
						imagemin.gifsicle(),
						imagemin.optipng(),
						imagemin.svgo(),
					])
				)
			)
			.pipe($.gulp.dest(imgPATH.output));
	});
};
