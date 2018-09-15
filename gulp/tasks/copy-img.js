module.exports = function () {
 $.gulp.task('copy-img', function() {
  return $.gulp.src('src/img/*.{jpg,png,gif,svg}')
  .pipe($.gulp.dest('build/img'))
})
}