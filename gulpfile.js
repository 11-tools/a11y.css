'use strict';

var gulp = require('gulp');

// Single tasks
gulp.task('sass', require('./tasks/sass'));
gulp.task('sassdoc', require('./tasks/sassdoc'));
gulp.task('hologram-js', require('./tasks/hologram-js'));
gulp.task('hologram-sass', require('./tasks/hologram-sass'));
gulp.task('hologram', gulp.series('hologram-sass', 'hologram-js'), require('./tasks/hologram'));
gulp.task('scss-lint', require('./tasks/scss-lint'));
gulp.task('css-lint', require('./tasks/css-lint'));
gulp.task('watch', require('./tasks/watch'));
gulp.task('translate', require('./tasks/translate'));

// Meta tasks
gulp.task('docs', gulp.series('sassdoc', 'hologram'));
gulp.task('lints', gulp.series('scss-lint', 'css-lint'));
gulp.task('default', gulp.series('sass'));
