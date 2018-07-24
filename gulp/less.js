var gulp = require('gulp');
var less = require('gulp-less'); //препроцессор less можно gulp-sass
var plumber = require('gulp-plumber'); //обработчик ошибок
// var sass = require('gulp-sass'); 
var csso = require('gulp-csso'); //минификатор css
var autoprefixer = require("autoprefixer"); //поддержка для старых браузе
var mqpacker = require("css-mqpacker"); //сортировка css
var minify = require("gulp-csso"); //минификатор js
var rename = require("gulp-rename"); //переименовывать файлы, решайет проблему с лшней папкой less
var postcss = require("gulp-postcss");
// var imagemin = require("gulp-imagemin");
// var svgstore = require("gulp-svgstore");
// var svgmin = require("gulp-svgmin");
var run = require("run-sequence");

var uglify = require("gulp-uglify");
var del = require("del");


gulp.task('less', function() {
 gulp.src("src/less/style.less")
	.pipe(plumber())
	.pipe(less())
	.pipe(postcss([
	autoprefixer({ browsers: [
	'last 2 versions', 
	'ie 11',
	'ie 10',
	'Android >= 4.1', 
	'Safari >= 8',
	'iOS >= 8'
	] }),     
	mqpacker({ sort: true })
]))
	.pipe(gulp.dest("build/css"))
  .pipe(csso()) //минификатор css
//	.pipe(minify()) //минифицирует js
	.pipe(rename('style.min.css'))
	//.pipe(rename('style.css'))
	.pipe(gulp.dest('build/css'))
	.pipe(browserSync.stream());
});

