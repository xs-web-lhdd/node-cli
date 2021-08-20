/**
 * @description 快速开发脚手架
 * @author 凉风有信、
 */

const program = require('commander')
let { promisify } = require('util')
let asyncFiglet = promisify(require('figlet'))
let chalk = require('chalk') // 给文字上色
const inquirer = require('inquirer')
let init = require('./init.js')

// 日志打印函数
const log = content => console.log(chalk.yellow(content))

// 版本和参数
program.version('1.0.0')
program.option("-n --name <type>", "output name")



// 打印logo
async function printLogo() {
  const data = await asyncFiglet('v-cli')
  log(data)
}


program
    .command('create <app-name>')
    .description('创建vue项目')
    .action(async (name) => {
      await printLogo(name)
      console.log('准备创建项目...');
      let answer = await inquirer.prompt([ // 询问
        {
          name: 'language',
          type: 'list',
          message: '请选择语言',
          choices: ['JavaScript', 'TypeScript']
        }
      ])
      if (answer.language == 'JavaScript') {
        log('你选择了Javascript版本，即将进入下载模式')
        init(name);
      } else {
        log('敬请期待！')
      }
    })

program.parse(process.argv)
