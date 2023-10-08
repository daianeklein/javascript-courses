// CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the 
//formula: BMI = mass / (height * height) (mass in kg and height in meters).
// Your task is to write some code to help them:
// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than 
// John. Log it to the console too

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture
// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly
// this formula mass / (height * height), and not this one mass / (height ** 2).

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

//BMI = mass / (height * height)
bmiMark = massMark / (heightMark * heightMark)
bmiJohn = massJohn / (heightJohn * heightJohn)
console.log(bmiMark)
console.log(bmiJohn)

// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
// Note: Don't round the BMI values. Leave them as they are.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture
// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly
// this formula mass / (height * height), and not this one mass / (height ** 2)

if (bmiJohn > bmiMark) {
    console.log(`Mark's BMI is ${bmiMark}, which is higher than John's, that is ${bmiJohn}!`);
} else {
    console.log(`John's BMI is ${bmiJohn} which is higher than Mark's, that is ${bmiMark}!`);
}


