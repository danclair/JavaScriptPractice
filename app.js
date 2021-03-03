// let score = 55;

// if (score >= 90) {
//   console.log("You got an A!");
// } else if (score >= 80) {
//   console.log("You got a B!");
// } else if (score >= 70) {
//   console.log("You got a C!");
// } else if (score >= 60) {
//   console.log("You got a D!");
// } else {
//   console.log("You got an F!");
// }


// let color = "purple";
// let animal = "frog";

// if (color === "purple" && animal === "toad") {
//     console.log("YAY PURPLE TOAD!!")
// } else {
//   console.log("BOO NOT PURPLE TOAD :(")
// }


// let age = 45;

// if (age < 8 || age >= 65) {
//   console.log("YOU GET IN FOR FREE");
// } else {
//   console.log("THAT WILL BE $10");
// }

// COIN TOSS EXAMPLE:
// let randNum = Math.random()

// if (randNum < 0.5) {
//   console.log("HEADS")
// } else {
//   console.log("TAILS")
// }


// for (let i = 0; i < 10; i++) {
//   console.log("IN THE LOOP!", i);
// }

// PERFECT SQUARES (1-20):
// for (let i = 1; i <= 20; i++) {
//   console.log(i*i)
// }

// COUNTDOWN FROM 50 TO 40:
// for (let i = 50; i > 39; i--) {
//   console.log(i);
// }


// let i = 50;
// while (i >= 40) {
//   console.log(i);
//   i--;
// }

// let password = 'lol';
// let guess = prompt("Enter the password");

// while (guess !== password) {
//   guess = prompt("Sorry, try again");
// }
// alert("YOU GOT IT RIGHT!!!")


// const purchases = [19.99, 9.50, 4.25, 28.75, 86.20, 1.99, 104.50, 2.85];
// let total = 0;

// for (let i = 0; i < purchases.length; i++) {
//   console.log(purchases[i]);
//   total += purchases[i];
// }
// console.log(`Total is: $${total}`);

// const purchases = [19.99, 9.50, 4.25, 28.75, 86.20, 1.99, 104.50, 2.85];
// let total = 0;

// for (let purchase of purchases) {
//   console.log(purchase);
//   total += purchase
// }

// console.log(`Total is: $${total}`);


// function laugh(loudness = 1, name = 'Anonymous') {
//   const laughter = "HA".repeat(loudness);
//   console.log(`${name} says ${laughter}`);
  
// }

// laugh(4,'Daisy');

// function square(num) {
//   return num ** 2;
// }

// function add(x, y) {
//   return x + y;
// }

// const result = square(7);
// square(add(5, 7))



// function startGame() {
//   const targetNum = generateRandom();
//   let guess = getInput();
  
//   while (guess !== targetNum) {
//     if (guess > targetNum) {
//       console.log(`${guess} IS TOO HIGH!`)
//     } else {
//       console.log(`${guess} IS TOO LOW!`)
//     }
//     guess = getInput();
//   }
//   alert(`YOU WIN!! ${guess} is the number!`)
// }

// function generateRandom() {
//   return Math.floor(Math.random() * 10) + 1;
// }

// function getInput() {
//   let guess = parseInt(prompt("Enter a number"));
//   while (Number.isNaN(guess)) {
//     guess = parseInt(prompt("Please enter a VALID number!"));
//   }
//   return guess;
// }

// startGame();