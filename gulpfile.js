var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat');

gulp.task('js', function () {
  return gulp.src('src/js/*.js')
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
});