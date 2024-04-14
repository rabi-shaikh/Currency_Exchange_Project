#! /usr / bin /env  node 
import inquirer from "inquirer";
let basedCurrency :any = {
    USD : 1,
    PKR : 280,
    EURO: 0.94,
    GBP: 0.80,
    INR:83.59,
};
let  currencyType = await inquirer.prompt([
    {
         name : "From"
         ,type:"list"
         ,message: "What is the type of money you have",
         choices : ["PKR", "USD","INR","GBP", "EURO"],
     },
     {
        name : "To"
         ,type:"list"
         ,message: "In which Currency You want to Covert Your Money",
         choices : ["PKR", "USD","INR","GBP", "EURO"],
     },
     {
        name : "amount"
         ,type:"number"
         ,message: "How many Money You have?",
         
     },
]);
let fromAmount = basedCurrency [currencyType["From"]]
let toAmount   = basedCurrency[currencyType["To"]];
let amount = currencyType["amount"];
let baseValue =  amount/fromAmount;
let convertedAmount = baseValue *toAmount ;
console.log(convertedAmount)