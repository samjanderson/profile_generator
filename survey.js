//Focus on the following
// The example usage shown at the beginning
// The .question(query, callback) function
// The .close() function
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let questions = ['What\'s your name? Nicknames are also acceptable :)',
'What\'s an activity you like doing?',
'What do you listen to while doing that?',
'Which meal is your favourite (eg: dinner, brunch, etc.)',
'What\'s your favourite thing to eat for that meal?',
'Which sport is your absolute favourite?',
'What is your superpower? In a few words, tell us what you are amazing at!'];

// //think of this like a for loop.. pair programmed with Munraj for(let x = 0; x< questions.length; x++)

let answerArr = []

const survey = (questions, questionNum) => { //question num is like x= 0 here
  if (questionNum !== questions.length) { //this is like comparing x < length if index isnt equal to length
    rl.question(questions[questionNum], (answer) => {  //the question at that specific index number and it takes an answer
      answerArr.push(answer);
      survey(questions,questionNum + 1);
    });
  }
  else {
    console.log(answerArr);
    rl.close();
  }
  
};


survey(questions, 0)

// function sumToOne(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n + sumToOne(n - 1);
// }

// /////////////ALTERNATE SOLUTION FOR MY OWN REVIEW FROM @ahSOLO
// let name = "";
// let activity = "";
// let music = "";
// let meal = "";
// let food = "";
// let sport = "";
// let superpower = "";

// rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
//   name = answer;
//   rl.question("What's an activity that you like doing? ", (answer) => {
//     activity = answer;
//     rl.question("What do you listen to while doing that? ", (answer) => {
//       music = answer;
//       rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
//         meal = answer;
//         rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
//           food = answer;
//           rl.question("Which sport is your absolute favourite? ", (answer) => {
//             sport = answer;
//             rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
//               superpower = answer;
//               console.log(`${name} likes to listen to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`)
//               rl.close();
//             });
//           });
//         });
//       });
//     });
//   });  
// });
