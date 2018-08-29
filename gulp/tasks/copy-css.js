module.exports = function () {
  $.gulp.task('copy-css', function (){
    return $.gulp.src('src/css/*.css')
    .pipe($.gulp.dest('build/css'))
  })
}