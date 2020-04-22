// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter 1 returns a function, and all the works is done under the same function. Besides that, counter1 creates a variable only available for that function while counter 2 makes a variable for the whole code. 
 * 2. Which of the two uses a closure? How can you tell?
 * Counter1, besides having 2 functions, it creates a variable only for that block of code. 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *When you don't wan't to create a variable that will be used in multiple places in your code, you want to use counter1 as it does not affect the rest of the code. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
let randomNumber = Math.floor((Math.random() )* 3);

return randomNumber
    /*Code Here*/

}
console.log(inning())
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, item){
let homeScore = 0
let awayScore = 0


for (let i = 0; i <= item; i++){
  homeScore += callback();
  awayScore += callback();
}
return  {
"Home" : homeScore,
"Away" : awayScore,
}

}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */
function getInningScore(parameter){
  let home = parameter();
  let away = parameter();
  return {home, away}
}
console.log(getInningScore(inning))
function scoreboard(getInningScore, inning, numberi) {
  let home = 0;
  let away = 0;
  for (let i=0; i < numberi ; i++){
    const score = getInningScore(inning);
    home += score.home;
    away += score.away;
    console.log ("Inning: " + (i + 1) + " Away Team: " + away + "Home Team: " + home)
  }
  return {home, away}
}

console.log(scoreboard(getInningScore, inning, 9));
