var log4js = require("log4js");
var logger = log4js.getLogger();

logger.level = "debug";
logger.debug("Some debug messages");


class testBS {
    constructor(name){
        //track heart rate

        this.owner = name;
        this.heartRate = 0;
        this.live()

    }
    randomBetween(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }
//generate hr and record
    beat() {
        //this function will generate random number 60 and 70

        let hr = this.randomBetween(60, 70);
        this.heartRate = hr
        logger.info('[Owner]:' + this.owner + '-------[HR]:' + this.heartRate)
    }
    live() {
        setInterval(() => { this.beat() }, 1000);
    }

}
let james = new testBS('james');
let sarah = new testBS('sarah');

//console.log(james)