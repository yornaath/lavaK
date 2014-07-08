var gulp = require( 'gulp' )
var uglify = require( 'gulp-uglify' )
var concat = require( 'gulp-concat' )
var del = require( 'del' )
var replace = require( 'gulp-replace' )

var packagejson = require('./package.json')

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
    .pipe( replace( '@@VERSION@@', packagejson.version ) )
    .pipe( replace( '@@DESCRIPTION@@', packagejson.description ) )
    .pipe( replace( '@@AUTHOR@@', packagejson.authors.join(',') ) )
    .pipe( replace( '@@HOMEPAGE@@', packagejson.repository.url ) )
    .pipe( replace( '@@LICENSE@@', packagejson.license ) )
    .pipe( gulp.dest('./') )
});

gulp.task( 'default', ['build'] )
