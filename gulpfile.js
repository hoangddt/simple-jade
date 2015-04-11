var gulp = require('gulp'),
    jade = require('gulp-jade');

var paths = {
  templates: ['develop/*.jade']
};

var destinationPath = 'build/';


gulp.task('jade', function() {
  gulp.src(['develop/*.jade'])
      .pipe(jade())
      .pipe(gulp.dest(destinationPath));
});

// gulp.task('sass', function() {
//   gulp.src('./styles/**/*.scss')
//       .pipe(sass())
//       .pipe(gulp.dest(destinationPath + 'styles/'));
// });



gulp.task('watch', function() {
  gulp.watch(paths.templates, ['jade']);
  gulp.watch(paths.styles, ['sass']);
});

gulp.task('develop', ['jade']);
gulp.task('default', ['develop']);

