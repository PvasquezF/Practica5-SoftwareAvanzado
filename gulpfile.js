const gulp = require('gulp');
const del = require('del');
const zip = require('gulp-zip');

gulp.task('clean', function() {
    return del('dist/**', { force: true });
});

gulp.task('move', function() {
    return gulp.src(['./*'], { base: './', ignore: ['node_modules', 'gulpfile.js', 'dist.zip'] })
        .pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
    return gulp.src('./dist/**')
        .pipe(zip('dist.zip'))
        .pipe(gulp.dest('./'));
});

gulp.task('build', gulp.series('clean', 'move', 'compress'));