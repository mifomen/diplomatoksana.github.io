module.exports = function () {
  $.gulp.task('clear', function() {
    return gh.gulp.src( 'build/**/*', { read: false })
    .pipe( gh.rm({ async: false }) )
  })
}