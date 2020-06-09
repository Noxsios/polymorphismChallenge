# polymorphismChallenge
Galvanize Polymorphism Challenge

*//create a function that takes in an integer for a person's age and an array of objects of type : "country minimum age checker" that checks the minimum age for different activities in different countries*



age = 17



array = [CountryMinimumAgeChecker, UsaMinimumAgeChecker, CanadaMinimumAgeChecker, FranceMinimumAgeChecker]



minimumAgeChecker(age, array)

*//prints the below output to the screen (these responses may not be accurate but is just an example)*

```
*//you can drive in most countries:false*
*//you can drive in most countries:false*
*//you can drive in most countries:false*

*//you can drive in United States: true*
*//you can vote in United States: false*
*//you can drink in United States: false*

*//you can drive in Canada: true*
*//you can vote in Canada: true*
*//you can drink in Canada: false*

*//you can drive in France: true*
*//you can vote in France: true*
*//you can drink in France: false*
```

* //driving -[Driving Link](https://en.wikipedia.org/wiki/List_of_minimum_driving_ages)
	* // Canada - 16
	* // France - 15
	* // USA - 18

- //voting - [Voting Link](https://en.wikipedia.org/wiki/Voting_age)
  - // Canada - 18
  - // France - 18
  - // USA - 18

* //drinking - [Drinking Link](https://en.wikipedia.org/wiki/Legal_drinking_age)
  * // Canada - 18
  * // France - 18
  * // USA - 21

```javascript
//for extra credit create another function that takes an array of person objects like the one below and prints to the screen their status for an array of country checkers*

person = { name: "John Doe", age: 17 }

minimumAgeChecker(age, array)
```



```javascript
*//for extra credit add additional countries other than Usa,Canada, and France to the array and create minimum age checker classes for them*
```



> [Github Repo Here](https://github.com/Noxsios/polymorphismChallenge)