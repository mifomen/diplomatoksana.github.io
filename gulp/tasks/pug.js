module.exports = function () {
  $.gulp.task('pug', function(){
   return $.gulp.src('src/pug/main.pug')
   .pipe(gh.gh.plumber())
   .pipe(gh.gh.pug({
    pretty:true
  }))
   .pipe(gh.gh.rename('index.html'))
   .pipe(gh.gulp.dest('build'))
   .on('end',$bs.reload)
 });
}