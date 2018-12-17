//处理模板脚本
import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './utils/args'

gulp.task('pages', () => {
  return gulp.src('app/**/*.ejs') //app下的所有ejs文件
    .pipe(gulp.dest('server/public'))
    .pipe(gulpif(args.watch, livereload()))

})