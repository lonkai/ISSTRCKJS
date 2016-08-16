
var gulp = require('gulp');
var colors = require('colors');
var runSequence = require('run-sequence');

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    runSequence('build');
});

gulp.task("heroku:production", function(){
    console.log('hello'); // the task does not need to do anything.
});

