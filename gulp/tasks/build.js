module.exports = function () {
$.gulp.task('build', 
  $.gulp.series(
    'clear',
      $.gulp.parallel('pug', 'compress-js','scripts'),
    $.gulp.parallel('img', 'scss')
    // 'serve'
    ));
$.gulp.task('default', 
    $.gulp.series(
      'build',
      'serve'
      ));
}