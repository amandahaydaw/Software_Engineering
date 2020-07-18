var log4js = require("log4js");
var logger = log4js.getLogger();
const readline =require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("how do u like node?",answer => {
    logger.info(`your answer: ${answer}`);
});