//每次生成的时候清除原目录
// 清空指定目录文件
import gulp from 'gulp'
import del from 'del'
// 命令行参数
import args from './utils/args'

gulp.task('clean', () => { //清空两个目录
  return del(['server/public', 'server/views'])
})