const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');

// HTML Task
gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

// SCSS Task
gulp.task('scss', function() {
    console.log('SCSS task started...');
    return gulp.src('src/scss/**/*.scss')  // Ensure this path matches your actual folder structure
        .pipe(sass().on('error', sass.logError))  // Compile SCSS to CSS
        .pipe(cleanCSS())  // Minify CSS
        .pipe(gulp.dest('dist/css'))  // Output to dist/css folder
        .pipe(browserSync.stream());  // Inject changes into BrowserSync
});

// JavaScript Task
gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())  // Minify JavaScript
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

// Images Task with Dynamic Import
gulp.task('images', async function() {
    const { default: imagemin } = await import('gulp-imagemin');
    return gulp.src('src/images/**/*.{jpg,jpeg,png,gif,svg}')
        .pipe(imagemin())  // Optimize images
        .pipe(gulp.dest('dist/images'));
});

// Serve Task
gulp.task('serve', function() {
    browserSync.init({
        server: './dist'  // Serve files from the dist directory
    });

    // Watch for changes in HTML, SCSS, JS, and images
    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/scss/**/*.scss', gulp.series('scss'));  // Watch SCSS files
    gulp.watch('src/js/*.js', gulp.series('js'));
    gulp.watch('src/images/*', gulp.series('images'));
});

// Default Task
gulp.task('default', gulp.series('html', 'scss', 'js', 'images', 'serve'));
