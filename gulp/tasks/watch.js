var sane = require('gulp'),
sleep = require('gulp-watch'),
browserSync = require('browser-sync').create();

sane.task('watch', function(){

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    sleep('./app/index.html', function(){
        browserSync.reload();
    });

    sleep('./app/assets/styles/**/*.css', function(){
        sane.start('cssInject');
    });

});

sane.task('cssInject', ['styles'], function(){
    return sane.src('./app/temp/styles.css')
    .pipe(browserSync.stream());

});