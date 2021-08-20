

let { promisify } = require('util')

let asyncFiglet = promisify(require('figlet'))

var figlet = require('figlet')

// 第一中方式callback调用
figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

// 第二种 async await调用
async function run() {
  let data = await asyncFiglet('Hello vue3')
  console.log(data);
}

run()
