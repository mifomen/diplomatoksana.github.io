module.exports = function () {
  $.gulp.task('scss',function () {
    return $.gulp.src('src/scss/main.scss')
    .pipe($.plumber())
    .pipe($.sass()).on('error', $.sass.logError)
    .pipe($.csso())
    .pipe($.autoprefixer({
      browsers: ['last 15 versions'],
      cascade: true
    }))
    .pipe($.rename('style.min.css'))
    .pipe($.gulp.dest('build/css'))
  });
}