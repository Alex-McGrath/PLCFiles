var readlineSync = require("readline-sync"); // Call the readline sync module
var conditions = require('./conditions.json') // This sets the conditions as a variable called conditions
var lastprice = require('./last.json')// This sets the last price as a variable from the external file
var charge = 22; // Admin charge is 22

var lastpricepaid = lastprice.value


var name = readlineSync.question("Hi, what is your name? ")
console.log("Hi " + name)
var age = readlineSync.question("How old are you? ")


if (age <= 20){


var duration = 20 - age;
    console.log(name + " You are too young to get a policy, you are only " + age + " Sorry, come back in " + duration + " years ")
}

else if(age > 20 && age < 35){
     console.log("Ok " + name + " Our records show your last premium paid was €" + lastpricepaid)
    var policy = age * 16
    var fpolicy = policy + charge
    console.log(name + " as you are " + age + " Years old, Your new policy has been calculated at : €" + policy + "\nThere is an admin charge of €" + charge + "\nyou must pay today €" + fpolicy)

    console.log("Please see below list of conditions which apply to this premium ")
    var text2 = ""; // This sets a variable text as empty as it will change later in the program
var i; // this sets a variable that we can use as a starting point
for (i = 0; i < conditions.length; i++) {

    // the statement here is very important lets understand it
    // the variable i sets the starting place 0 is the first item in an array (1 would be second and so on)
    // the i < condition.length tells the program that as long as the postion where the loop is a number smaller than the actual number of items it must do something
    // the i++ tells it to keep going as long as part 2 is true
    text2 += "Condition No: " + (i +1) + " is: " + conditions[i] + "\n"; // this line sets the value of the text for each variable
}
    console.log(text2) // This line console logs the anwser
}
else{
console.log(" Ok " + name + ", our records show your last premium paid was €" + lastpricepaid)
var policy = 700
var fpolicy = policy + charge
console.log(name + " as you are now age " + age + " Your new policy has been calculated at : €" + fpolicy)

console.log("Please see below a list of conditions which apply to this premium:")
var text2 = ""; // This sets a variable text as empty as it will change later in the program
var i; // this sets a variable that we can use as a starting point
for(i = 0; i < conditions.length; i++) {

    // the statement here is very important lets understand it
    // the variable i sets the starting place 0 is the first item in an array (1 would be second and so on)
    // the i < condition.length tells the program that as long as the postion where the loop is a number smaller than the actual number of items it must do something
    // the i++ tells it to keep going as long as part 2 is true
    text2 += "Condition No: " + (i +1) + " is: " + conditions[i] + "\n"; // this line sets the value of the text for each variable
}
    console.log(text2) // This line console logs the anwser
}





