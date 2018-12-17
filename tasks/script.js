import gulp from 'gulp';
// if判断
import gulpif from 'gulp-if'
// 处理文件拼接
import concat from 'gulp-concat'
// 打包
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import named from 'vinyl-named'
//热更新
import livereload from 'gulp-livereload'
// 处理文件信息流
import plumber from 'gulp-plumber'
//文件重命名
import rename from 'gulp-rename'
// 处理js压缩和css压缩
import uglify from 'gulp-uglify'
// 命令行工具输出的包
import {log, colors} from 'gulp-util'
// 命令行参数解析
import args from './utils/args'

//创建一个任务
gulp.task('script', () => {
  return gulp.src(['app/js/index.js'])
  // 处理常规错误逻辑
    .pipe(plumber({
      errorHandle: function () {

      }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel'
        }]
      }
    }), null, (err, stats) => {
      log(`Finished'${colors.cyan('script')}'`, stats.toString({
        chunks: false
      }))
    })
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
      basename: 'cp',
      extname: '.min.js'
    }))
    .pipe(uglify({
      compress: { //配置压缩规则
        properties: false
      },
      output: {
        'quote_keys': true
      }
    }))
    .pipe(gulp.dest('server/public/js'))
    //判断参数执行热更新
    .pipe(gulpif(args.watch, livereload()))
})
