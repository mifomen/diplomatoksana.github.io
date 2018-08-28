module.exports = function () {
 $.gulp.task('html2pug', function() {
  // Backend locales
  return $.gulp.src('src/**/metrika.html')
  .pipe($.gp.html2pug(
   { fragment: false }
   // /* options for html2pug such as { fragment: true } */
   ))
  .pipe($.gp.rename('metrika.pug'))
  .pipe($.gulp.dest('./src/pug/pages'))
  .pipe($.bs.reload({
   stream: true
  }))
 });
}