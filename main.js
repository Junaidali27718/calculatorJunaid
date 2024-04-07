#! /usr/bin/env node
import inquirer from "inquirer";
const result = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    { message: "please select one of the operator to operate them",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiply", "division",]
    },
]);
if (result.operator === "Addition") {
    console.log(result.firstNumber + result.secondNumber);
}
else if (result.operator === "Subtraction") {
    console.log(result.firstNumber - result.secondNumber);
}
else if (result.operator === "Multiply") {
    console.log(result.firstNumber * result.secondNumber);
}
else if (result.operator === "division") {
    console.log(result.firstNumber / result.secondNumber);
}
else
    (console.log("please select the valid operator"));
