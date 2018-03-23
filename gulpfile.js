var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');

gulp.task('js', function () {
  return gulp.src('src/js/*.js')
    .pipe(concat('app.min.js'))
    .pipe(babel({ presets: ['env'] }))    
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
});