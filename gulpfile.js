var gulp = require( 'gulp' )
var uglify = require( 'gulp-uglify' )
var concat = require( 'gulp-concat' )
var del = require( 'del' )


var paths = {
  script: './src/lavaK.js',
  build: './lavaK.min.js'
}


gulp.task('clean', function(cb) {
  del([paths.build], cb)
});


gulp.task('build', ['clean'], function() {
  return gulp.src( paths.script )
    .pipe( uglify({ preserveComments: 'all' }))
    .pipe( concat(paths.build) )
    .pipe( gulp.dest('./') )
});

gulp.task( 'default', ['build'] )
