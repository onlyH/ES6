//当原文件发生改变自动编译到public或者views
// 浏览器监听文件
import gulp from 'gulp'
import gulpif from 'gulp-if'
import gutil from 'gulp-util'
import args from './utils/args'

gulp.task('browser', (cb) => {
  if (!args.watch) return cb()
  gulp.watch('app/**/*.js', ['scripts'])
  gulp.watch('app/**/*.ejs', ['pages'])
  gulp.watch('app/**/*.js', ['css'])
})