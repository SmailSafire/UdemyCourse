
// Types out what kind of DataType the variable has.


// let isIsland = false;
// let language
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

//  Lecture let, const and var

// const language = 'Darija';
// console.log(language);
// language = 'arabic'; ERROR = script.js:46 Uncaught TypeError: Assignment to constant variable.
// at script.js:46:10

//  ___
// language = 'Darija';
// const country = 'Morocco';
// const continent = 'Africa';
// const isIsland = false;
// isIsland = true; <---- error Can't change value of a const.


// ______

// let year = null;
// console.log(typeof year);   Object
// year = true;
// console.log(typeof year);   Boolean
// year = 'True';
// console.log(typeof year);   String
// year = 1992;
// console.log(typeof year);   Number

// ____




// let year = null;
// console.log(typeof year);   Object
// year = true;
// console.log(typeof year);   Boolean
// year = 'True';
// console.log(typeof year);   String
// year = 1992;
// console.log(typeof year);   Number


// //LECTURE: Basic Operators BASIC OPERATORS
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// //2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Smail';
// const lastName = 'Safire';
// console.log(firstName +' '+ lastName);



// //Assignment Opperators

// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4;// x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100

// console.log(x);

// //  Comparison Operators




// console.log(ageJonas > ageSarah); // Is Jonas older than Sarah?
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);



//let population = 46000000;
//let Finland = 6000000;
//let averagePopulation = 33000000;
//let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
//population = population / 2;

//console.log(population);
//population++;
//console.log(population);
//console.log(population > Finland); // Is population bigger than 6000000
//console.log(averagePopulation > population);
//console.log(description);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);


// let x, y;
// x = y = 25-10-5;
// console.log(x, y);

// BMI CALCULATOR

//  const massMark = 78;
//  const hightMark = 1.69;
//  const massJohn = 92;
//  const hightJohn = 1.95;


//   const BMIMark = massMark / (hightMark ** 2);
//   const BMIJohn = massJohn / (hightJohn * hightJohn);
//   const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark , BMIJohn , markHigherBMI);















//   Strings and Template Literals 


//  const firstName = 'Jonas';
//  const job = 'TechSupport'
//  const birthYear = 1991;
//  const year = 2037;

//const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// // console.log(jonas);

// // const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// // console.log(jonasNew);

// const jonas = `I'm ${firstName}, a  ${year - birthYear}  years old ${job}!`;
// console.log(jonas);

// These are the same and this way we can easily use HTML in JavaScript and shoot it in to the Website.

//  console.log('This is one line \n\ but this is further down\n\
//  And this is all the way down');


//  console.log(`This is one line
//  but this is further down
//  And this is all the way down `);

// //taking Decisions: if / else Statements

// const age = 17;
// const isOldEnough = age >= 18;

//  if(isOldEnough) {
//    console.log('Sarah can start driving lessons 🚗');
//  } else {
//  const yearsLeft = 18 - age;
//    console.log(`Sarah is going to have to wait for another ${yearsLeft} year${yearsLeft > 1 ? 's' : ''}`);
//  } 

 


// const age = 17;

// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log(`Sarah CAN start her Driving lessons 🚗`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`That bitch to young`);
//}
// const age = 16;

// if (age >= 18) {
//     console.log(`She can drive tutut 🚗 `);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Hon får nog cykla i ${yearsLeft} år till. 🚴🏻‍♂️`); 
// }


// const massMark = 78;
// const hightMark = 1.69;
// const massJohn = 92;
// const hightJohn = 1.95;

// const markBMI = massMark / (hightMark * hightMark);
// const johnBMI = massJohn / (hightJohn * hightJohn);

 

// if (markBMI > johnBMI) {
//     console.log(`Marks BMI is ${markBMI} and it's ${markBMI - johnBMI} higher than Johns.`);
// } else {
//     console.log(`Johns BMI is higher this time around it's ${johnBMI - markBMI} more than Mark.`)
// }

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18)


// console.log(Number('Jonas'));
// console.log(typeof NaN);

// // type coercion

// //Addion turns integers to strings 
// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + '23' + ' years old');
// console.log('I am ' + String(23) + ' years old');


// //Subtraction turns strings to integers
// console.log('23' - '10' - 3);

// //Multiplier and divid can only work with integers(Automatic coercion)
// console.log('23' * '2');
// console.log('23' / '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);


// Falsy and Truthy Values

//Falsy values: 0, "", undefined, NaN, null

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// //Result for all is: False
// //_______________________________________
// const money = 0; (0 is a falsy)

// if (money) {
//     console.log("Don't spend it all in one place");
// } else {
//     console.log("Better get a job, you damn bum!");
// }

// STRICT And LOOSE === / ==

// EXAMPLE: 
// Number need to be specified if the input is going to be read as an integer when using STRICT equal too
// const favourite = Number(prompt("Guess a number between 1-20!"));

// const age = '18';

// if (age === 18) console.log("This is a strict 'equal to' ");

// if (age == 18) console.log("This is a loose 'equal to' ")

// const favourite = prompt('Guess a number!');

// if (favourite == 23) {
//     console.log("Amazing THAT'S CORRECT");
// } else {
//     alert("That's wrong sorry :(");
// }

//  const money = 0;

// if (money) {
//           console.log("Don't spend it all in one place");
//  } else {
//      console.log("You really need to get a job! You have " + 1 + " dollar left.");
//  }


//Number need to be specified if the input is going to be read as an integer when using STRICT equal too
// const favourite = Number(prompt("What's your favourite Number?"));

// if (favourite === 1) {
//     console.log("That's my nr 1 Favourite 🤣");
// }   else if (favourite === 5){
//     console.log("That's a good one 'I got 5 On it!' ");
// }   else if (favourite === 10) {
//     console.log("Amazing!");
// }   else {
//     console.log("The number is not 1, 5, or 10");
// } 
// if(favourite !== 10) console.log("Why not 10? 🤬")















// EMIL


//I want a loop Here I think

// const favourite = Number(prompt("Guess a number between 1-20!"));

// if (favourite === 1) {
//     console.log("That's a good number.");
// } else if (favourite === 5){
//     console.log("Yeah, 5 is also a good one!");
// } else if (favourite === 10) {
//     console.log("Yeah, 10 is also a good one!");
// } else if (favourite === 15) {
//     console.log("Yeah, 15 is also a good one!");
// } else {
//    const favourite = Number(prompt("Wrong Guess again!"));
// } if (favourite === 1, 5, 10, 15) {
//     console.log("WINNER WINNER CHICKEN DINNER!")
// }






// const scoreDolphines = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphines > scoreKoalas) {
//     console.log(`The Dolphines won this one with ${scoreDolphines - scoreKoalas} more points....` );

// } else {
//     console.log(`The Koalas were a bit better this time by ${scoreKoalas - scoreDolphines} points.`);
// }



const scoreDolphines = (109 + 95 + 123) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;


console.log(Math.floor(scoreDolphines));
console.log(Math.floor(scoreKoalas));


if (scoreDolphines > scoreKoalas && scoreDolphines > 100) {
    console.log(`The Dolphines won this one with ${(Math.floor(scoreDolphines - scoreKoalas))} more points....` );
} 

else if (scoreKoalas > scoreDolphines && scoreKoalas > 100 ) {
    console.log(`The Koalas were a bit better this time by ${(Math.floor(scoreKoalas - scoreDolphines))} points.`);
} 

else if (scoreDolphines === scoreKoalas && ) {
    console.log(`I CAN'T BELEVE IT! IT'S A DAMN DRAW!!!!!!`)
}

