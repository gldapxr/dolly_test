var {src,dest,task, series, parallel} = require('gulp');
var gulp = require('gulp');
var concat = require('gulp-concat');
var terser = require('gulp-terser');
var sourcemaps = require('gulp-sourcemaps');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();

//browser tasks
function watch(){
  browserSync.init({
    server:{
      baseDir: './dist',
      port: 3000
    }
  });
  gulp.watch('src/*.html').on('change',browserSync.reload);
}
function reload(done){
 browserSync.reload();
 done();
 }
 //js tasks
 function jsTask(){
   return src("src/*.js",{allowEmpty: true})
   .pipe(sourcemaps.init())
   .pipe(terser())
   .pipe(sourcemaps.write('.'))
   .pipe(gulp.dest('dist'));
 }
//html tasks
function copyHtml(){
  return src('./src/*.html')
  .pipe(gulp.dest('dist'));
}
function htmlMin() {
  return src('./src/*.html')
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest('dist'));
}
//images tasks
function copyImages() {
  return src("./src/assets/images/**")
  .pipe(gulp.dest('dist/assets/images'));

}
//model tasks
function copyModels() {
  return src('src/assets/models/**')
  .pipe(gulp.dest('dist/assets/models'));
}

//json tasks


/*function watchTask(){
  watch('src/*.html',copyHtml);
  watch('src/assets/images/**',copyImages);
  watch('src/assets/models/**', copyModels);
}
*/
exports.htmlMin = htmlMin;
exports.jsTask = jsTask;
exports.copyHtml = copyHtml;
exports.watch = watch;
exports.default = parallel(copyHtml, copyImages, copyModels);
