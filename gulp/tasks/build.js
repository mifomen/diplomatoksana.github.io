module.exports = function () {
  $.gulp.task('build', 
    $.gulp.series(
      'clear',
      'copy-css',
      'html',
      'copy-img',
      'scss',
      'scripts:lib',
      'script'
      // $.gulp.parallel('scripts:lib','script')
      ));
  $.gulp.task('f-build', 
    $.gulp.series(
      'clear',
      'copy-css',
      'html',
      'img-min',
      'scss',
      'scripts:lib',
      'script'
      ));

  $.gulp.task('final', 
    $.gulp.series(
      'build',
      'serve'
      ));
  
  $.gulp.task('default', 
    $.gulp.series(
      'f-build',
      'serve'
      ));
}