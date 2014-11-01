var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    concatUtil = require('gulp-concat-util'),
    package = require('./package.json');

// header
var header = '// ' + package.title + ' - ' + package.author + '\n' 
    + '// ' + package.repository.url + ' - MIT License\n\n';

// paths
paths = {
    src: 'src/' + package.name + '.js',
    output: 'dist/'
}

gulp.task('minify', [ 'test' ], function(){
    return gulp.src(paths.src)
        .pipe(concatUtil.header(header))
        .pipe(gulp.dest(paths.output))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.output))
});

gulp.task('test', function () {
    return gulp.src(paths.src)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('default', [ 'minify' ]);