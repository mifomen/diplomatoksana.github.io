module.exports = function () {
  $.gulp.task('img', function() {
    return $.gulp.src('src/img/*.{jpg,png,gif,svg}')
    .pipe($.imagemin(
      [
      $.imagemin.gifsicle({interlaced: true}),
      $.imagemin.jpegtran({progressive: true}),
      $.imagemin.optipng({optimizationLevel: 5}),
      $.imagemin.svgo({
        plugins: [
        {removeViewBox: true},
        {cleanupIDs: false}
        ]
      })
      ]))
    .pipe($.gulp.dest('build/img'))
  });
}