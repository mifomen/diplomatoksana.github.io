var gulp = require('gulp');
var run = require("run-sequence");

gulp.task("clean", function() {
  return del("build")
});
