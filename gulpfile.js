var gulp = require('gulp');

var less   = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
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
        .pipe(gulp.dest(dist + 'css'));
});

gulp.task('default', function() {

  gulp.watch(source + 'less/*.less', ['less']);

    // place code for your default task here
});
