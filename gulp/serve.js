var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task("serve", function() {
  browserSync.init({
    server: "build",
    notify: false,
    open: true,
    ui: false
  });

  // gulp.watch("src/**/*.less", ["minjs"]);
  // gulp.watch("src/**/*.js", ["html"]);
  // gulp.watch("src/**/*.html", ["less"]);

 gulp.watch("src/**/*.js", ["minjs"]).on("change", browserSync.reload);
  gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
  gulp.watch("src/**/*.less", ["less"]).on('change', browserSync.reload);
});