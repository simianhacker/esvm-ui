const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

gulp.task('webpack', () => {
 return gulp.src('src/client/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/public/'));
});

gulp.task('html', () => {
  return gulp.src('src/client/index.html')
    .pipe(gulp.dest('dist/public'));
});

gulp.task('js', () => {
  return gulp.src('src/server/**/*.js')
    .pipe(babel({ plugins: ["transform-es2015-modules-commonjs"] }))
    .pipe(gulp.dest('dist'));
});

gulp.task('dev', ['webpack', 'js', 'html'], () => {
  gulp.watch('src/server/**/*.html', ['html']);
  gulp.watch('src/server/**/*.js', ['js']);
  gulp.watch('src/client/**/*.js', ['webpack']);
  gulp.watch('src/client/**/*.scss', ['webpack']);
});

gulp.task('default', ['webpack']);
