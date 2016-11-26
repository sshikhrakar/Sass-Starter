var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    notify = require("gulp-notify"),
    browserSync = require('browser-sync'),
    historyApiFallback = require('connect-history-api-fallback'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    runSequence = require('run-sequence'),
    maps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    watch = require('gulp-watch');

// Start SASS
gulp.task('sass', function () {
	return sass('sass/style.scss', { sourcemap: true })
    .pipe(maps.init())
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(maps.write('./'))
	  .pipe(gulp.dest('css/'))
    .pipe(notify('Sass compiled'))
	  .pipe(browserSync.reload({stream: true}))
});

// Start browserSync server
gulp.task('browser-sync', function () {
	browserSync({
	  server: {
	    baseDir: ''
	  },
	  middleware: [historyApiFallback()],
	  ghostMode: false
	});
});

// Optimizing Images
gulp.task('images', function(){
  return gulp.src('images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
    .pipe(cache(imagemin({
    	// Setting progressive to true for jpegs
  		progressive: true,
  		// Setting multipass to true allows optimizing png again and again until best result obtained
  		multipass: true,
      // Setting interlaced to true for gifs
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images/'))
});

// Optimizing CSS and JavaScript
gulp.task('useref', function(){
  return gulp.src('*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

// Copying fonts
gulp.task('fonts', function() {
  return gulp.src('fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

gulp.task('html', function(){
  return gulp.src('*.html')
  .pipe(gulp.dest('dist'))
});
// Cleaning
gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

// Watchers
gulp.task('watch', function () {
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('*.html', browserSync.reload);
  gulp.watch('js/**/*.js', browserSync.reload);
});

// Build Sequences
// Run sass, browserSync and watch on default 'gulp' command
gulp.task('default', function(callback) {
  runSequence(['sass', 'browser-sync', 'watch'],
    callback
  )
});

// Build optimized js, css, fonts and images on dist folder on 'gulp build' command
gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    ['sass', 'useref', 'images', 'fonts', 'html'],
    callback
  )
});
