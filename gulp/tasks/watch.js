module.exports = function () {
  $.gulp.task('watch', function() {
    $.gulp.watch("src/scss/**/*.scss",  $.gulp.parallel('scss'));
    $.gulp.watch("src/pug/**/*.pug",  $.gulp.parallel('pug'));
    $.gulp.watch("src/js/**/*.js",  $.gulp.parallel('script'));
    $.gulp.watch("src/pug/html2pug/*.html",  $.gulp.series('html2pug','pug'));
  });
}