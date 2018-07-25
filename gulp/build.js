var gulp = require('gulp');
var cfg = require('../package.json').config;
var run = require("run-sequence");
// var less = require('gulp-less');

gulp.task("build", function(evt) {
  run(
    "full-clean",
    // "copy",

    "html",
    "sass",
    "retype-js",
        "retype-images",
    "retype-fonts",
    // "images",
    // "symbols",
    evt
  );
});