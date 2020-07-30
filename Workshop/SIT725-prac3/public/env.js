console.log('hello world')

$(document).ready(function(){
setInterval(()=>{
    $.get('/random',(data)=>{
        $('#randomNum').html(data.random)
    })
},1000)
})


$(document).ready(function(){
   
    $('#btnWeather').click(function(){
        let num1=$('#number1').val()
        let num2=$('#number2').val()
        console.log(num1)
        let data={
            num1,num2
        }
    

    $.get("/adder",data,function(returnData)
    {
       console.log(returnData);
      $('#result').val(returnData.result)
    });
})
});
