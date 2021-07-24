module.exports = { go: getCommand, showHelp: showHelp};
const chalk = require('chalk');  
const boxen = require('boxen');

function getCommand() {
    
    let newpath = "/c/Users/Nasta/Documents";
    let command = "cd " + newpath;
    console.log(boxen(chalk.bgYellow.black.bold(`Copy and Paste Me:`) + chalk.green.bold(` ${command}`), {padding: 1, borderColor: "yellow", dimBorder: true}));

}


const usage = chalk.hex("#009933")("\nUsage: to myDoc -go to go to local Documents");

function showHelp() {                                                            
    console.log(usage);  
    console.log('\nOptions:\r')  
    console.log('\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r')  
    console.log('    -l, --go\t' + '      ' + 'Go to local documents folder' + '\t\t' + '[boolean]\r')  
    console.log('\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n')  
}

