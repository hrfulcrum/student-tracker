var gulp        = require('gulp');
var config      = require('../config').webpack;
var webpack     = require('gulp-webpack');
var browserSync = require('browser-sync');

gulp.task('webpack', function() {
    return gulp.src(config.entry)
        .pipe(webpack(require('../../webpack.config')))
        .pipe(gulp.dest(config.dist))
        .pipe(browserSync.reload({stream:true}));
});
