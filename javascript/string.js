let str="eswarreddy"
// let str1="Rup";
// console.log(str.length)//10
// console.log(str.charAt(3))//a
// console.log(str.charCodeAt(3))//97 ascii value
// console.log(str.at(2))//w
// console.log(str.slice(-5))//reddy
// console.log(str.substring(0,5))//eswar negative index not possible
// console.log(str.substr(0,10))//eswarreddy
// console.log(str.toUpperCase())//ESWARREDDY
// console.log(str.toLowerCase())//eswarreddy
// console.log(str1.concat(str))//Rupeswarreddy
// console.log(str.trim())// to remove spaces left and right side
// console.log(str.trimStart())//it remove spaces at front side
// console.log(str.trimEnd())//it remove spaces at end side
// console.log(str.padStart(11,0))//0eswarreddy
// console.log(str.padEnd(14,0))//eswarreddy0000
// console.log(str.repeat(2))// it repeat string in 2 times
// console.log(str.replace("eswarreddy","rupeswarreddy"))// it replace the text with rupeswarreddy
// console.log(str.replaceAll("eswarreddy","Rupeswarredddy"))//it replace the all text with new content
// console.log(str.split(" "))// it convert string into array
// console.log(str.indexOf('a'))//it display position of an character
// console.log(str.lastIndexOf('e'))//6
// console.log(str.search('ddy'))//it display index position of an characater//8A
// console.log(str.includes("eswar"))// it display true or false based on content is present or not
// console.log(str.startsWith('e'))//it display true or false based on character startwith specificed one or not
// console.log(str.endsWith('y'))//same
console.log(str.match('r'))
let myArr=str.matchAll('d')
console.log(Array.from(myArr))//it takes seperate array for each result




