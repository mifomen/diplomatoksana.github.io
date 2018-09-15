module.exports = function () {
  $.gulp.task('serve', function (){
    $.bs.init({
      server: {
        baseDir: 'build'
      },
      notify: false,
      open: true,
      ui: false
    }),
    $.gulp.watch("src/scss/**/*.scss",  $.gulp.parallel('scss'));
    $.gulp.watch("src/pug/**/*.pug",  $.gulp.parallel('pug'));
    $.gulp.watch("src/js/**/*.js",  $.gulp.parallel('script'));
    $.gulp.watch("src/**/*.html",  $.gulp.series('html'));
    $.gulp.watch("src/img/*.*",  $.gulp.series('clear-img','copy-img'));
  })
}