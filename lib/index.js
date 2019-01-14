#!/usr/bin/env node
const fs = require("fs");
const program = require("commander"); //终端输入处理框架
const package = require("./package.json"); //获取版本信息
program
  .version(package.version, "-v,--version")
  .command("init <name>")
  .action(name => {
    console.log(name);
  });
program.parse(process.argv);
