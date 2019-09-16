var gulp = require('gulp'),
    del = require("del"),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify');

var src = './src/main.js',
    dist = './dist',
    minjs = 'mml.min.js';

gulp.task('clean', function() {
    return del(dist);
});

gulp.task('build', function () {
    return gulp.src(src)
        .pipe(rename(minjs))
        .pipe(uglify())
        .pipe(gulp.dest(dist));
});

