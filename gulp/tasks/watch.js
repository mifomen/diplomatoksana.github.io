module.exports = function () {
$.gulp.task('watch', function() {
  $.gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'))
  $.gulp.watch('src/pug/main.pug', gulp.parallel('pug'))
});

}