var gulp = require('gulp')
var rename = require('gulp-rename')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var postcss_partial_import = require('postcss-partial-import')
var postcss_shopify_settings_variables = require('postcss-shopify-settings-variables')

gulp.task('style', function () {
  var processors = [
    postcss_partial_import,
    autoprefixer,
    postcss_shopify_settings_variables
  ]
  return gulp.src('./src/style.css')
    .pipe(postcss(processors))
    .pipe(rename(function (path) {
      path.extname = '.css.liquid'
    }))
    .pipe(gulp.dest('./assets'))
})
