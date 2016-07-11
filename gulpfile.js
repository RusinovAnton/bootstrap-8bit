'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

const config = {
    css: {
        src: './stylesheets/**/*.scss',
        dest: './public/assets/css'
    }
}


gulp.task('css', ()=>{
    gulp.src(config.css.src)
        .pipe(plumber())
        .pipe(sourcemaps.init({loadMaps:true}))
        .pipe(sass())
        .pipe(cssnano())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.css.dest));
});

gulp.task('default', ['css']);
