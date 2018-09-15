module.exports = function () {
  $.gulp.task('clear-img', function() {
    return $.gulp.src( 'build/img/*', { read: false })
    .pipe( $.gp.rm({
     async: true 
   }) )
  })
}