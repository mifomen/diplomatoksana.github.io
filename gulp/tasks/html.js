module.exports = function () {
 $.gulp.task('html', function() {
  // Backend locales
  return $.gulp.src('src/**/index.html')
  // .pipe($.gp.html2pug(
  //  { fragment: false }
  //  // /* options for html2pug such as { fragment: true } */
  //  ))
  .pipe($.gp.rename('index.html'))
  .pipe($.gulp.dest('./build/'))
  .pipe($.bs.reload({
   stream: true
  }))
 });
}