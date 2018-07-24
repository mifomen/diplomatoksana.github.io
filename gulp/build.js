var gulp = require('gulp');
var run = require("run-sequence");
var less = require('gulp-less');


gulp.task("build", function(fn) {
  run(
    "clean",
    "copy",
    "less",
    "minjs",
    // "images",
    "symbols",
    fn
  );
});