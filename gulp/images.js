var gulp = require('gulp');
var imagemin = require("gulp-imagemin");

gulp.task("images", function() { //сжатие картинок без потери качества и перенос в папку bild
  return gulp.src("build/img/**/*.{jpg, png, gif}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
  ]))
  .pipe(gulp.dest("build/img"));
});