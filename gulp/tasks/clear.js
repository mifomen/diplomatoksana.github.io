module.exports = function () {
  $.gulp.task('clear', function() {
    return $.gulp.src( 'build/**/*', { read: false })
    .pipe( $.gp.rm({
     async: true 
   }) )
  })
}