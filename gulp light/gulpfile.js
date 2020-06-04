const gulp = require('gulp');
const scss = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
// const autoPref = ('gulp-autoprefixer');
// const clean = require('gulp-clean');

// ____________________________________________

gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: 'src'
		},
	})
})

// ____________________________________________

gulp.task('scss', function () {
	return gulp.src('src/scss/**/*.scss')
	.pipe(map.init())
	.pipe(scss())
	.pipe(map.write())	
	.pipe(gulp.dest('src'))
	.pipe(browserSync.stream(true))
});

// ____________________________________________

// Pug start
gulp.task('pug', function () {
	return gulp.src('src/pugs/*.pug')
		.pipe(pug({pretty: true}))
		// .pipe(concat('index.html'))
		.pipe(gulp.dest('src'))
		.pipe(browserSync.stream(true))
		
});
// Pug end
// ____________________________________________

gulp.task('watch', function () {
	gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'));
	gulp.watch('src/pugs/**/*.pug', gulp.parallel('pug'));
	gulp.watch("src/*.html").on('change', browserSync.reload);
	gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
})

// ____________________________________________

gulp.task('default', gulp.parallel('watch', 'browserSync'));
