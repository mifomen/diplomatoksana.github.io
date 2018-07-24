var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var gulp = require('gulp');

gulp.task("minjs", function() { //минификация js и перенос в папку билд
  gulp.src("src/js/*.js")
    .pipe(uglify())
    .pipe(rename('min.js'))
    .pipe(gulp.dest("build/js"));
});