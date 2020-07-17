const path=require("path");
const util=require("util");
const v8 = require("v8")
const directoryUploads = path.join(__dirname ,'www','files','uploads');
console.log(directoryUploads);
console.log(`\n ${__filename}`)

util.log(path.basename(__filename));
util.log(" ^ the name of the current file");


util.log(v8.getHeapStatistics());

