var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    typescript = require('gulp-typescript');

var paths = {
  templates: ['./**/*.jade'],
  styles: './styles/**/*.scss',
  scripts: './scripts/**/*.js'
};

var destinationPath = 'build/';

var tsConfig = typescript.createProject({
  declarationFiles: true,
  noExternalResolve: true,
  target: 'ES5'
});

gulp.task('jade', function() {
  gulp.src(['./**/*.jade', '!./node_modules/**/*.jade'])
      .pipe(jade())
      .pipe(gulp.dest(destinationPath));
});

gulp.task('sass', function() {
  gulp.src('./styles/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest(destinationPath + 'styles/'));
});

gulp.task('typescript', function() {
  gulp.src('./scripts/**/*.ts')
      .pipe(typescript(tsConfig))
      .pipe(gulp.dest(destinationPath + 'scripts/'));
});

gulp.task('copy', function() {

  // Copy scripts
  gulp.src('./scripts/**/*.js')
      .pipe(gulp.dest(destinationPath + 'scripts/'));

  // Copy static files
  gulp.src('./static/**/*.*')
      .pipe(gulp.dest(destinationPath));

});

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['jade']);
  gulp.watch(paths.styles, ['sass']);
});

gulp.task('develop', ['copy', 'jade', 'sass', 'typescript']);
gulp.task('default', ['develop']);

