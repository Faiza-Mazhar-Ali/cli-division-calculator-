#! /usr/bin/env node 

import inquirer from "inquirer";

//first promt 
let option1 = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "please enter your first number:"
    }
])


//second promt 
let option2 = await inquirer.prompt([
    {
        name: "num2",
        type: "number",
        message: "please enter your second number:"
    }
])

//print output
let output: number = option1.num1 / option2.num2
console.log(output);

