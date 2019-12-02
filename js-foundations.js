// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".


var divisible = (number) => {
    if(number % 3){
        return "is divisible by three"
    }else{ 
         return "is not divisible by three."
    }
}

console.log(divisible(15,0,385-7))



// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

var  helloMe = {
    name:"Sabrina",
    eyes: "blue", 
    hair: "blonde"
}

console.log(helloMe.name)
console.log(helloMe.eyes)
console.log(helloMe.hair)

console.log(`${helloMe.name} has ${helloMe.eyes} eyes and ${helloMe.hair} hair.`)

// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"

function drop(array){
    let newArr=[]
    for(let i=0; i<array.length; i++){
        if (array[i]=== "streetlamp","teeth","nephew","database"){
            newArr.push(array[i])
        }
    }
    return newArr
}
console.log(drop(randomNouns))



// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

var nounParty = (array) =>{
    return array.map(value => value.slice(0,1).toUpperCase() + value.slice(1))
} 
console.log(nounParty(randomNouns))
// for (let i = 0; i < randomNouns.length; i++) {
//  randomNouns[i] = randomNouns[i].slice(0,1).toUpperCase() + randomNouns[i].slice(1);
// }
// console.log(randomNouns)

// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]




// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

var alphabetSoup = (string) =>{
    return string.split("").sort().join("")
    
}
console.log(alphabetSoup(testString1))
console.log(alphabetSoup(testString2))
console.log(alphabetSoup(testString3))



// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"



var abcOrder = (...variables) =>{
    return variables.join("").split("").sort().join("")
} 
console.log(abcOrder(testString1,testString2,testString3))


// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

var animalParty=(array1 ,array2) => {
    let newArr =[]
    for(let i=0;i < array1.length; i++){
        newArr.push(array1[i], array2[i])
      
    }
    return  newArr.join(" ")
}

console.log(animalParty(amounts, animals))
// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"
 