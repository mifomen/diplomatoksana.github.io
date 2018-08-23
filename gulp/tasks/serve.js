module.exports = function () {
  $.gulp.task('serve', function (){
    @bs.init({
      server: {
        baseDir: 'build'
      },
      notify: false,
      open: true,
      ui: false
    }),
    $.gulp.watch("src/scss/**/*.scss",  gulp.parallel('scss')).on("change", @bs.reload);
    $.gulp.watch("src/pug/**/*.pug",  gulp.parallel('pug')).on("change", @bs.reload);
    $.gulp.watch("src/js/**/*.js",  gulp.parallel('compress-js')).on("change", @bs.reload);

  })

}