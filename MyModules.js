let count = 0;
const inc =() => ++count;
const dec = () => --count;
const getCount=()=>count;
//export any js script
module.exports = {
   inc,dec,getCount 
};