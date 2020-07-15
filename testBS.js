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
        console.log('[Owner]:' + this.owner + '-------[HR]:' + this.heartRate)
    }
    live() {
        setInterval(() => { this.beat() }, 1000);
    }

}
let james = new testBS('james');
let sarah = new testBS('sarah');
//console.log(james)