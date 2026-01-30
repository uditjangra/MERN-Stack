const person = {
    name : "John",
    address : {
        city : "New York",
        street : "123 Main St",
    }
}

//We use optional chaining to make sure there are no errors when working on a larger data.

console.log(person.address.city) //This will print it properly.
console.log(person.addres.city) //This will print error as the spelling has issues 

//This is why we use it like this:
console.log(person?.addres?.city); //This will return undefined and wont make the system crash and show error.