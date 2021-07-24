#! /usr/bin/env node
const yargs = require("yargs");
const utils = require("./utils.js");
const chalk = require('chalk');  
const boxen = require('boxen');

const usage = chalk.hex("#009933")("\n Usage: Input myDoc --go to go to local Documents folder.");
const options = yargs.usage(usage).options("1", {
    alias: "go", describe: "Go to local documents folder", type: "boolean", demandOption: false
})
.help(true)
.argv;

var go = utils.go(yargs.argv._);

if(yargs.argv._[0] == null){
    utils.showHelp();
    return;
}