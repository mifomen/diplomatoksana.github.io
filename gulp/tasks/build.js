module.exports = function () {
$.gulp.task('build', 
  $.gulp.series(
    'clear',
      $.gulp.parallel('pug', 'compress-js'),
    $.gulp.parallel('img', 'scss')
    // 'serve'
    ));

}