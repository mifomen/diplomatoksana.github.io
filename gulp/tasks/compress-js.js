module.exports = function () {
$.gulp.task('compress-js', function() {
  return $.gulp.src('src/js/main.js')
  .pipe($.gp.plumber())
  .pipe($.gp.uglify())
  .pipe($.gp.rename('main.min.js'))
  .pipe($.gulp.dest('build/js'))
  .on('end',$.bs.reload)
})
}