var logger = require('nodejslogger');
logger.init({"file":"output.txt"});

const waitTime=5000;//ms
const waitInterval=500;
let cuurentTime = 0;//let user to change the time as requird hence let to declare varible used
const incrementTime=()=>{
    cuurentTime +=waitInterval
const percentage =Math.floor((cuurentTime/waitTime) *100);//to get percenatge of time
    console.log(` waitng ${cuurentTime/1000} seconds`);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ..... ${percentage}%`);
}
logger.info(`current time before converting to seconds ${cuurentTime}`)
console.log(`setting a ${waitTime/1000} second delay`);

const timerFinished = () =>
{//to clear interval
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done");
} 
//to clear interval
const interval = setInterval(incrementTime,waitInterval) // similar to timeout , first take function ,second function time interval should wait 
setTimeout(timerFinished,waitTime);
logger.debug("Debug logs");
logger.info("Info logs");
logger.error("Error logs");