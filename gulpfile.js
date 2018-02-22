var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var uglify = require('gulp-uglify');
 
var sassPaths = [
  'node_modules/bootstrap/scss/'
];

gulp.task('sass', function() {
  return gulp.src('src/scss/styles.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed'
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

//gulp.task('exec', ['clean'], shell.task("node scripts/script.js"))

gulp.task('default', ['sass', 'compress'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});