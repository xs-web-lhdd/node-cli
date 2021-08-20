/**
 * @description 项目克隆
 * @author 凉风有信、
 */

let { promisify } = require('util')
const download = require('download-git-repo')
const ora = require('ora')
const shell = require('shelljs')
const chalk = require('chalk')
const log = content => console.log(chalk.yellow(content))

module.exports = async (appName) => {
  log(`🚀创建项目 ${appName}`)
  // 将已存在的相同项目进行删除
  shell.rm('-rf', appName)
  const spinner = ora('下载中...').start()
  try {
    await download(
      "direct:https://gitee.com/web-lhdd/nodejs-imitates-sina-weibo.git",
      appName,
      { clone: true },
    );
    spinner.succeed('下载成功了呢')
    log(`
下载完成，请执行下面命令启动项目：
==============================
cd ${appName}
yarn 或者 init install
npm run dev
或者
yarn dev
    `)
  } catch (error) {
    console.log(`下载失败：${error}`);
    spinner.stop()
  }
}