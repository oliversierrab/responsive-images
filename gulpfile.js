var gulp = require('gulp');
var clean = require('gulp-clean');
var responsive = require('gulp-responsive');
var config = require('./config.json');

gulp.task('clean', function () {
    return gulp.src(config.paths.destination, {read: false})
        .pipe(clean());
});

gulp.task('generate', ['clean'], function () {
    return gulp.src(config.paths.source)
    .pipe(responsive([{
        name: '**/*.jpg',
        width: config.sizes.small,
        rename: {
          suffix: config.suffix.small
        }
    },{
        name: '**/*.jpg',
        width: config.sizes.small2x,
        rename: {
          suffix: config.suffix.small2x
        }
    },{
        name: '**/*.jpg',
        width: config.sizes.medium,
        rename: {
          suffix: config.suffix.medium
        }
    },{
        name: '**/*.jpg',
        width: config.sizes.medium2x,
        rename: {
          suffix: config.suffix.medium2x
        }
    },{
        name: '**/*.jpg',
        width: config.sizes.large,
        rename: {
          suffix:config.suffix.large
        }
    },{
        name: '**/*.jpg',
        width: config.sizes.large2x,
        rename: {
          suffix: config.suffix.large2x
        }
    },{
        name: '**/*.png',
        width: config.sizes.small,
        rename: {
          suffix: config.suffix.small
        }
    },{
        name: '**/*.png',
        width: config.sizes.small2x,
        rename: {
          suffix: config.suffix.small2x
        }
    },{
        name: '**/*.png',
        width: config.sizes.medium,
        rename: {
          suffix: config.suffix.medium
        }
    },{
        name: '**/*.png',
        width: config.sizes.medium2x,
        rename: {
          suffix: config.suffix.medium2x
        }
    },{
        name: '**/*.png',
        width: config.sizes.large,
        rename: {
          suffix:config.suffix.large
        }
    },{
        name: '**/*.png',
        width: config.sizes.large2x,
        rename: {
          suffix: config.suffix.large2x
        }
    }],{
      quality: config.quality,
      // errorOnUnusedImage, false,
      compressionLevel: config.pngcompression //Default: 6
    }))
    .pipe(gulp.dest(config.paths.destination));
});

gulp.task('build', ['generate']);