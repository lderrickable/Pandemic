var gulp = require('gulp');
var closureCompiler = require('gulp-closure-compiler');

gulp.task('default', function() {
  gulp.src('index.js')
    .pipe(closureCompiler({
      compilerPath: 'bower_components/closure-compiler/lib/vendor/compiler.jar',
      fileName: 'build.js',
      compilerFlags: {
      	compilation_level:'SIMPLE_OPTIMIZATIONS'
      }
    }))
    .pipe(gulp.dest('dista'));
});