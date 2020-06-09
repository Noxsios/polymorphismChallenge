class CountryMinimumAgeChecker {
    //set the default age for driving,drinking,and voting to be 21
    constructor(name) {
        this.name = name
    }
    isOfDrivingAge(value) {
        return (value >= 21)
    }
    isOfVotingAge(value) {
        return (value >= 21)
    }
    isOfDrinkingAge(value) {
        return (value >= 21)
    }
}
class UsaMinimumAgeChecker extends CountryMinimumAgeChecker {
    isOfDrivingAge(value) {
        return (value >= 18)
    }
    isOfVotingAge(value) {
        return (value >= 18)
    }
    isOfDrinkingAge(value) {
        return (value >= 21)
    }
}
class CanadaMinimumAgeChecker extends CountryMinimumAgeChecker {
    isOfDrivingAge(value) {
        return (value >= 16)
    }
    isOfVotingAge(value) {
        return (value >= 18)
    }
    isOfDrinkingAge(value) {
        return (value >= 18)
    }
}
class FranceMinimumAgeChecker extends CountryMinimumAgeChecker {
    isOfDrivingAge(value) {
        return (value >= 15)
    }
    isOfVotingAge(value) {
        return (value >= 17)
    }
    isOfDrinkingAge(value) {
        return (value >= 18)
    }
}
//create a function that takes in an integer for a person's age and an array of objects of type : "country minimum age checker" 
//that checks the minimum age for different activities in different countries
let Usa = new UsaMinimumAgeChecker('USA')
let France = new FranceMinimumAgeChecker('France')
let Canada = new CanadaMinimumAgeChecker('Canada')
let defaultCheck = new CountryMinimumAgeChecker('most countries')

function minimumAgeChecker(age, array) {
    array.forEach(element => {
        console.log(`You can drive in ${element.name}:${element.isOfDrivingAge(age)}`)
        console.log(`You can vote in ${element.name}:${element.isOfVotingAge(age)}`)
        console.log(`You can drink in ${element.name}:${element.isOfDrinkingAge(age)}`)
        console.log("\n")
    });
}

let age = 17
let array = [defaultCheck, Usa, Canada, France]
minimumAgeChecker(age, array)

// //for extra credit create another function that takes an array of person objects like the one below and prints to the screen their status for an array of country checkers
let person = { name: "John Doe", age: 17 }
let person2 = { name: "Jane Doe", age: 22 }
let objArray = [person,person2]

function objMinimumAgeChecker(nameArray, countryArray){
    
}
objMinimumAgeChecker(objArray, array)
//for extra credit add additional countries other than Usa,Canada, and France to the array and create minimum age checker classes for them


