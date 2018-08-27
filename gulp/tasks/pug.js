module.exports = function () {
  $.gulp.task('pug',function(){
   return $.gulp.src('src/pug/main.pug')
   .pipe($.gp.plumber())
   .pipe($.gp.pug({
    pretty:true
  }))
   .pipe($.gp.rename('index.html'))
   .pipe($.gulp.dest('build/'))
   .pipe($.bs.reload({
    stream: true
  }))
 })

}