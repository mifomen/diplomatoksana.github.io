module.exports = function () {
  $.gulp.task('compress-js', function() {
    return $.gulp.src('src/js/main.js')
    .pipe($.plumber())
    .pipe($.uglify())
    .pipe($.rename('main.min.js'))
    .pipe($.gulp.dest('build/js'))
  });
}