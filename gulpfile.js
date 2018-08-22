'use strict'

var gulp = require('gulp'),
       $ = require('gulp-load-plugins')(),
       browserSync = require('browser-sync').create();

gulp.task('pug',function(){
 return gulp.src('src/pug/main.pug')
 .pipe($.plumber())
  .pipe($.pug({
    pretty:true
  }))
  .pipe($.rename('index.html'))
  .pipe(gulp.dest('build/'));
});

  gulp.task('scss',function () {
    return gulp.src('src/scss/main.scss')
      .pipe($.plumber())
      .pipe($.sass()).on('error', $.sass.logError)
      .pipe($.csso())
           .pipe($.rename('style.min.css'))
      .pipe(gulp.dest('build/css'))

  });

gulp.task('watch', function() {
  // gulp.parallel(styles, scripts)
  gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'))
  gulp.watch('src/pug/main.pug', gulp.parallel('pug'))
});

gulp.task('serve', function (){
  browserSync.init({
    server: {
      baseDir: 'build'
    },
   notify: false,
   open: true,
   ui: false
  }),
  // gulp.watch('src/scss/**/*.scss', gulp.parallel('scss').on('change',browserSync.reload));
   // gulp.parallel('pug'))

   gulp.watch("src/scss/**/*.scss",  gulp.parallel('scss')).on("change", browserSync.reload);

   gulp.watch("src/pug/**/*.pug",  gulp.parallel('pug')).on("change", browserSync.reload);


})