let download = require('download-git-repo')

download(
  "direct:https://gitee.com/web-lhdd/nodejs-imitates-sina-weibo.git",
  "demo",
  { clone: true },
  function (err) {
    console.log(err ? "Error" : "Success");
  }
);
// direct后面是克隆的仓库地址
// demo是克隆下来的仓库名称
// clone：true 会经克隆下来的项目变成一个项目依赖（就是git init）