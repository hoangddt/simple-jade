var gulp = require('gulp'),
    jade = require('gulp-jade');

var paths = {
  templates: ['develop/*.jade', 'develop/*/*.jade']
};

var destinationPath = 'build/';

gulp.task('jade', function() {
  gulp.src(paths.templates)
      .pipe(jade({
        pretty: true
      }
      ))
      .pipe(gulp.dest(destinationPath));
});

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['jade']);
});

gulp.task('develop', ['jade', 'watch']);
gulp.task('default', ['develop']);

