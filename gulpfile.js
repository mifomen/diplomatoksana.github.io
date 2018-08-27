'use strict'

global.$ = {
 gulp: require('gulp'),
 gp: require('gulp-load-plugins')(),
 bs: require('browser-sync').create(),
 mqpacker: require('css-mqpacker'),
   path: {
    tasks: require('./gulp/config/tasks.js')
  }
}
$.path.tasks.forEach( function (taskPath){
  require(taskPath)();
})
