module.exports = function () {
  $.gulp.task('build', 
    $.gulp.series(
      'clear',
      'html2pug',
      'pug',
      $.gulp.parallel('img', 'scss'),
      $.gulp.parallel('scripts:lib','script')
    // 'serve'
    ));
  $.gulp.task('default', 
    $.gulp.series(
      'build',
      'serve'
      ));
}