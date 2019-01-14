#!/usr/bin/env node   //告诉node使用终端运行
const fs = require("fs"); //文件系统
const program = require("commander"); //终端输入处理框架
const packageJson = require("./package.json"); //获取版本信息

program
  .version(packageJson.version, "-v,--version","show your version")
  .description("xuetengfei node command line")
  .option("-p, --peppers", "Add peppers")
  .option("-P, --pineapple", "Add pineapple")
  .option("-b, --bbq", "Add bbq sauce")
  .option(
    "-c, --cheese [type]",
    "Add the specified type of cheese [marble]",
    "marble"
  )
  .parse(process.argv);

console.log("hi,you ordered a pizza with:");
if (program.peppers) console.log("  - peppers");
if (program.pineapple) console.log("  - pineapple");
if (program.bbq) console.log("  - bbq");
console.log("  - %s cheese", program.cheese);

program
	.command("setup")
	.description("setup command is running...")
  .action(function(){
	 console.log('log setup')
	})

program.parse(process.argv);
