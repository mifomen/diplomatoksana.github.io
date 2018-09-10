module.exports = function () {
  $.gulp.task('build', 
    $.gulp.series(
      'clear',
      'copy-css',
      // 'html2pug',
      // 'pug',
      'html',
      // 'img',
      'copy-img',
      'scss',
      'scripts:lib',
      'script'
      // $.gulp.parallel('pug','img', 'scss'),
      // $.gulp.parallel('scripts:lib','script')
    // 'serve',
    // 'watch'
    ));
  $.gulp.task('default', 
    $.gulp.series(
      'build',
      'serve'
      ));
}