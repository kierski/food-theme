
const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');

gulp.task('default', () => {
	return gulp.src(['src/js/load.js', 'src/js/header.js', 'src/js/main.js'])
		.pipe(plumber())
		.pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/js'));
});

gulp.task('watch', () => {
  gulp.watch('src/js/**/*.js', ['default']);
});

gulp.task('components', () => {
	return gulp.src(['src/components/jQuery/dist/jquery.min.js', 'src/components/typed.js/js/typed.js'])
    .pipe(plumber())
    .pipe(concat('components.js'))
    .pipe(uglify())
		.pipe(gulp.dest('public/js'));
});
