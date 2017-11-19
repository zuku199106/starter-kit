var 
  gulp = require('gulp'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass');

gulp.task('default', ['sass','pug'], function() {
  console.log("Sass + Pug without watch");
});
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/*.sass', ['sass']);
});

gulp.task('pug', function buildHTML() {
  return gulp.src('./src/pug/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('pug:watch', function () {
  gulp.watch('./src/pug/*.pug', ['pug']);
});

gulp.task('watch', ['sass:watch','pug:watch']);