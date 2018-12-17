//处理服务器脚本
import gulp from 'gulp'
import gulpif from 'gulp-if'
import liveserver from 'gulp-live-server'
import args from './utils/args'

gulp.task('server', (cb) => {
  if (!args.watch) return cb()
  //创建一个服务器
  var server = liveserver.new(['--harmony', 'server/bin/www'])
  server.start()
  gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function (file) {
    server.notify.apply(server, [file])
  })
  //监听需要重启的服务
  gulp.watch(['server/routes/**/*.js', 'server/app.js'], function () {
    server.start.bind(server)()
  })
})