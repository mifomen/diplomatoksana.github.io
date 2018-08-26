module.exports = function () {
$.gulp.task('scss',function () {
  return $.gulp.src('src/scss/main.scss')
    .pipe($.gp.plumber())
    .pipe($.gp.sass()).on('error', $.gp.sass.logError)
    .pipe($.gp.csso())
     .pipe($.gp.autoprefixer({
            browsers: ['last 15 versions'],
            cascade: true
        }))
    .pipe($.gp.rename('style.min.css'))
    .pipe($.gulp.dest('build/css'))
  .on('end',$.bs.reload)
});
}