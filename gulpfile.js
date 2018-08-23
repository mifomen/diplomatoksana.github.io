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
  .pipe(gulp.dest('build/'))
  .on('end',browserSync.reload)
});

gulp.task('scss',function () {
  return gulp.src('src/scss/main.scss')
    .pipe($.plumber())
    .pipe($.sass()).on('error', $.sass.logError)
    .pipe($.csso())
     .pipe($.autoprefixer({
            browsers: ['last 15 versions'],
            cascade: true
        }))
    .pipe($.rename('style.min.css'))
    .pipe(gulp.dest('build/css'))

});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'))
  gulp.watch('src/pug/main.pug', gulp.parallel('pug'))
});

gulp.task('img', function() {
  return gulp.src('src/img/*.{jpg,png,gif,svg}')
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
.pipe(gulp.dest('build/img'))
});

gulp.task('compress-js', function() {
  return gulp.src('src/js/main.js')
  .pipe($.plumber())
  .pipe($.uglify())
  .pipe($.rename('main.min.js'))
  .pipe(gulp.dest('build/js'))

});

gulp.task('clear', function() {
  return gulp.src( 'build/**/*', { read: false })
  .pipe( $.rm({
   async: true 
 }) )
})

gulp.task('serve', function (){
  browserSync.init({
    server: {
      baseDir: 'build'
    },
    notify: false,
    open: true,
    ui: false
  }),
  gulp.watch("src/scss/**/*.scss",  gulp.parallel('scss')).on("change", browserSync.reload);
  gulp.watch("src/pug/**/*.pug",  gulp.parallel('pug')).on("change", browserSync.reload);
 gulp.watch("src/js/**/*.js",  gulp.parallel('compress-js')).on("change", browserSync.reload);

})

gulp.task('build', 
  gulp.series(
    'clear',
      gulp.parallel('pug', 'compress-js'),
    gulp.parallel('img', 'scss')
    // 'serve'
    ));


// $.gulp.task('default', 
//   $.gulp.series(
//     'clear',
//     $.gulp.parallel('pug', 'compress-js'),
//     $.gulp.parallel('img', 'scss'),
//     'serve'
//     ));
