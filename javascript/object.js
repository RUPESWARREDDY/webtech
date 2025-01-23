const p1={
    name:"eswar",
    lname:"reddy",
    age:24,
    caste:"reddy"
}
const p2={
    name:"rupeswarreddy",
    job:"digital engineering"
}
// Assign Source to Target p1 values assign to p2
Object.assign(p2,p1)
//convert object to array
// The Object.entries() method returns an array of the key/value pairs of an object.
// The Object.entries() method does not change the original object.
let text=Object.entries(p2)
console.log(text);
//object create
let man=Object.create({})
man.firstname="eswar"
console.log(man);
//defineproperities
const person = {
    firstName: "John",
    lastName: "Doe"
  };
  
  Object.defineProperties(person, {
    language: {value: "en"},
    year: {value: "Hello"}
  });
  console.log(person)
  // Add a new Property
Object.defineProperty(person, "year", {value:"2008"})
// Freeze Object
// Frozen objects are read-only. No modification, addition or deletion of properties are allowed.
// The Object.isFrozen() method can be used to check if an object is frozen.
Object.freeze(person)
//The fromEntries() method creates an object from a list of key/value pairs.
const myObj = Object.fromEntries(fruits);
// Get Properties we get only keys from object
let props = Object.getOwnPropertyNames(person);
//The Object.preventExtensions() method prevents adding properties to an object.
//You can use Object.isExtensible() to check if an object is extensible.
// Create Object
const person = {firstName:"John", lastName:"Doe"};
// Prevent Extensions
Object.preventExtensions(person);
// This will return false
let answer = Object.isExtensible(person);
//The Object.isFrozen() returns true if an object is frozen.
Object.freeze(person);
// This will return true
let text = Object.isFrozen(person);
//The Object.seal() method prevents additions or deletions of new properties.
//The Object.isSealed() returns true if an object is sealed.
// Seal Object
Object.seal(person);
// This will return true
let answer = Object.isSealed(person);
//The Object.keys() method returns an array with the keys of an object.
const keys = Object.keys(person);
//
