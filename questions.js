// const readline = require("readline")
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
const collectAnswers = require("./lib/collectAnswers")
const questions=["whats your name ? ",
"where do u live ? ",
"what are you going to do with NODE js ? "];

// const collectAnswers =(questions,done)=>{
//     const answers =[];
//     // done(answers);
//     const[firstQuestion]=questions;
//     const questionAnswered = answer=>{
//         answers.push(answer);
//         if(answers.length < questions.length){
//             rl.question(questions[answers.length],questionAnswered);
//         }
//         else{
//             done(answers);
//         }
//     }
//     rl.question(firstQuestion,questionAnswered);
// };

// collectAnswers(questions);

collectAnswers(questions,answers =>{
console.log("Thank you for your answers.");
console.log(answers);
process.exit();

});