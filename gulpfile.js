var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');

gulp.task('js', function () {
  return gulp.src('src/js/*.js')
    .pipe(concat('app.min.js'))
    .pipe(babel({ presets: ['env'] }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('css', function () {
  return gulp.src(['src/css/*.css', 'src/sass/*.scss'])
    .pipe(sass())
    .pipe(concat('main.min.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css/'))
});