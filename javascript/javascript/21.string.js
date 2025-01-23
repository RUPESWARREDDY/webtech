let str="eswarreddy"
console.log(str)
console.log(typeof str)

let str1=String("plvd")
console.log(str1)
console.log(typeof str1)

let str2=String(true)
console.log(str2)
console.log(typeof str2)

//length method
console.log(str.length)

//Startwith method

let sw1=str.startsWith("e")
console.log(sw1)

console.log(String("rupesh").startsWith("r"));

let sw2=str.startsWith('sw',1)//it takes index of the string
console.log(sw2)

//endswith method

let ew1=String("eswarreddy")
console.log(ew1.endsWith("d",8))//it takes length of the string
console.log(ew1.endsWith("y"))

//touppercase
let para= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iste et debitis vitae beatae, eum, modi, blanditiis accusantium cupiditate similique quis labore quasi ut ex optio asperiores esse explicabo alias?"
console.log(para.toUpperCase())
//tolowercase method

console.log(para.toLowerCase())

//charat &charcodeAt method

let ch="nothing"
console.log(ch.charAt(4))
console.log(ch.charCodeAt(4))

//indexof & lastindexpof() method

let st="javascript"
console.log(st.indexOf("a"))
console.log(st.lastIndexOf("a"))
console.log(st.indexOf("x"))

//substring method

let sb="javascript"
console.log(sb.substring(0,4))
console.log(sb.substring(4,1))
console.log(sb.substring(4))

//SUBSTR METHOD

console.log(sb.substr(0,4))
console.log(sb.substr(4,5))
console.log(sb.substr(3,5))

//slice method

console.log(sb.slice(-6,-1))
console.log(sb.slice(0,-6))
console.log(sb.slice(-8,8))
console.log(sb.slice(6,-1))

//repeat method

let str5="eswarreddy "
console.log(str5)
console.log(str5.length)
console.log(str5.repeat(3))

//trim method()

let t="     royal enfield     "
console.log(t)
console.log(t.length)
let t1=t.trim()
console.log(t1)
console.log(t1.length)

//spilt method
let s="i love farming"
console.log(s.split())//to convert string to array
console.log(s.split(" "))//spilt words
console.log(s.split(''))//spilt characters

//join method

let jo=['hi','how','are','you']
console.log(jo)
console.log(typeof jo)

let j=jo.join()
console.log(j)
console.log(typeof j)
console.log(jo.join(' '));
// console.log([]+{})