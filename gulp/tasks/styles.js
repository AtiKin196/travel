var sane = require('gulp'),
postcss = require('gulp-postcss'),
autopre = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

sane.task('styles', function(){
    return sane.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport,mixins, cssvars, nested, autopre]))
    .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(sane.dest('./app/temp/styles'));
 });