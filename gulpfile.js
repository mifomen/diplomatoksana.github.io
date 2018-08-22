'use strict'


var gulp = require('gulp'),
       $ = require('gulp-load-plugins')();

gulp.task('pug',function(){
return gulp.src('src/pug/*.pug')
.pipe($.pug({
  pretty:true
}))
.pipe(gulp.dest('build'))
});

  gulp.task('scss',function () {
    return gulp.src('src/scss/main.scss')
    .pipe($.sass()).on('error', $.sass.logError)
    .pipe($.csso())
    .pipe(gulp.dest('build/css'));

  });