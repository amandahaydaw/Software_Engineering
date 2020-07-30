let express=require('express')
let moment=require('moment')
let app=express()
var log=function(message){
    var time=moment().format()
    console.log('[Server] @'+time +''+ message)
}

app.use(express.static(__dirname+'/public'));
app.get('/adder',function(req,res)

{
    let num1=parseInt(req.query.num1);
    let num2=parseInt(req.query.num2);
    let result = num1+num2;
    let data={
        result
    }
    res.json(data)
})


function getRandomInt(max){
    return Math.floor(Math.random()*Math.floor(max));
}

// app.get(`/test`,function(req,res){
//     var username=req.query.username;
//     console.log(`yes I have been hit  ` + username);
//     res.send('hello you hit me ' + username);
// });

app.get(`/random`,function(req,res){
    let random = getRandomInt(100)
    let data={
        random
    }
    res.json(data)
});

var port=3000;
app.listen(port)
log('server listening on'+port)
