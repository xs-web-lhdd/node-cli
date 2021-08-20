const { program } = require('commander');
program.version('0.0.1');

// 参数解析
// 前面是简写，后面是全程，就好比 -V --version
// 能接收参数，如果接收参数一定要用<>包裹起来
// 有两种参数一种是布尔类型的，另一种是输入类型
program.option('-n ', '输出名称')
program.option('-t --type <type>', '项目名称')



const options = program.opts()

console.log("options=>", options);

program
    .command('create <app-name>')
    .description('创建一个标准的vue项目')
    .action((name) => {
      console.log(`正在创建vue项目，名称为${name}`);
    })


// parse一定要放到最后面
program.parse(process.argv) 