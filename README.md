现一个脚手架，通过命令可以自动创建项目。
插件介绍
commander
文档地址：https://www.npmjs.com/package/figlet
说明：命令行插件
使用方法：

```js
const { program } = require("commander");
program.version("0.0.1");
program.option("-n ", "输出名称");
program.option("-t --type <type>", "项目名称");

const options = program.opts();

console.log("options=>", options);

program
  .command("create <app-name>")
  .description("创建一个标准的vue项目")
  .action((name) => {
    console.log(`正在创建vue项目，名称为${name}`);
  });

// parse一定要放到最后面
program.parse(process.argv);
```

figlet
文档地址：https://www.npmjs.com/package/figlet
说明：大型字符 - 终端打印大型文字
使用方法：

```js
let { promisify } = require("util");

let asyncFiglet = promisify(require("figlet"));

var figlet = require("figlet");

// 第一中方式callback调用
figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// 第二种 async await调用
async function run() {
  let data = await asyncFiglet("Hello vue3");
  console.log(data);
}

run();
```

inquirer
文档地址：https://www.npmjs.com/package/inquirer
说明：命令行参数输入交互
使用方式：

```js
const { program } = require("commander");
let inquirer = require("inquirer");

inquirer
  .prompt([
    {
      username: "userName",
      type: "input",
      message: "你的名字叫什么？",
    },
  ])
  .then((answer) => {
    console.log("回答内容：", answer);
  });

program.parse(process.argv);
```

chalk
文档地址：https://www.npmjs.com/package/chalk
说明：彩色文字-美化终端字符显示
使用方式：

```js
const chalk = require("chalk");

console.log(chalk.blue("Hello world!"));
```
