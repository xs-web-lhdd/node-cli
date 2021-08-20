const { program } = require('commander');
let inquirer = require('inquirer')


inquirer.prompt([
  {
    username: 'userName',
    type: 'input',
    message: '你的名字叫什么？'
  }
]).then((answer) => {
  console.log('回答内容：',answer);
})


program.parse(process.argv)