let express=require('express')
let moment=require('moment')
let app=express()


app.use(express.static(__dirname+'/public'));

var log=function(message){
    var time=moment().format()
    console.log('[Server] @'+time +''+ message)
}
let addition=function(num1,num2)
{
    let result=num1+num2;
    return result;
}

app.get('/adder',function(req,res)

{
    let num1=parseInt(req.query.num1);
    let num2=parseInt(req.query.num2);
    let result = num1+num2;
    res.json({result:result})
})

var port=3000;
app.listen(port)
log('server listening on'+port)
