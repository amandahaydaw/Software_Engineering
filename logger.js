//process object
// console.log(process.pid);
// console.log(process.versions.node);
// console.log(process.argv);


// const [, , firstName,lastname ]=process.argv;
// console.log(`your first name is ${firstName} ${lastname}`);
// const grab =flag =>{
//     let indexAfterFlag = process.argv.indexOf(flag)+1;
//     return process.argv[indexAfterFlag]
// }
// const greeting=grab("--greeting");
// const user=grab("--user");
// console.log(`${greeting} ${user}`);
process.stdout.write("Hello\n");
console.log("Hello")
process.stdout.write("World \n\n");

const questions=["what is your name","whats your prefered lanagauge"];
const ask=(i=0)=>{
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);

  
};
ask();
const answer = [];
process.stdin.on("data" , data =>{
    // process.stdout.write(`\n\n${data.toString().trim()}\n\n`);
    // process.stdout.write(` > `);
answer.push(data.toString().trim());

if(answer.length < questions.length)
{
    ask(answer.length);
}
else
{
    process.exit();
}
process.on("exit",()=>{
    const [name,lang]=answer;
    console.log(`
    Thank you for your answers.
    Go ${name} you can write ${lang} code later !!`)
})

});