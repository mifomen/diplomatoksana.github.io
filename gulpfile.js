'use strict'

global.$ = {
 gulp: require('gulp'),
 gh: require('gulp-load-plugins')(),
 bs: require('browser-sync').create(),
 path: {
   tasks: require('./gulp/config/tasks.js')
 }
};

$.path.tasks.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', 
    $.gulp.series(
      'clear',
      $.gulp.parallel('pug', 'compress-js'),
      $.gulp.parallel('img', 'scss'),
      'serve'
      ));
