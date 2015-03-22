var gulp = require('gulp');

var less   = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    gconcat = require('gulp-concat'),
    path   = require('path');

var source = "assets/";
var dist = "source/";

gulp.task('less', function () {
    gulp.src(source + 'less/style.less')
        .pipe(less()) // Compile LESS
        .on('error', function(err){ console.log(err.message); })
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .on('error', function(err){ console.log(err.message); })
//        .pipe(minifyCSS()) // Minify CSS
        .pipe(gulp.dest(dist));
});

gulp.task('scripts', function () {
  gulp.src(source + 'js/*.js')
      .pipe(gconcat('scripts.js'))
      .pipe(gulp.dest(dist))
});

gulp.task('default', function() {
  gulp.watch(source + 'less/*.less', ['less']);
  gulp.watch(source + 'js/*.js', ['scripts']);
});
