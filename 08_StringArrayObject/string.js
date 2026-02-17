// let firstName = "Manas";
// let middleName = "Kumar";
// let lastName = "Lal";

// let fullName = firstName + " " + middleName + " " + lastName;
// console.log(fullName)
// let fullName2 = `${firstName} ${middleName} ${lastName}`
// console.log(fullName2)

// console.log(`My name is ${fullName}`)

// let a = 10;
// let b = 20;
// let c = 30;
// let str = `Number 1 = ${a} Number 2 = ${b} Number 3 = ${c}`
// console.log(str)

// let gamma = `str = ${2+3+5+8-9}`
// console.log(gamma)


// let str = new String("Manas")
// console.log(str)

// str = "school4u"
// str2= "school\n4u" //10
// str3 = "Hello \\n beta"
// console.log(str, str.length)
// console.log(str2, str2.length)
// console.log(str3, str3.length)

// let str = "hello world"

// console.log(str[1])
// console.log(str[5])
// console.log(str[7])

// str[7] = "u";
// console.log(str) // hello wurld

// let str2 = "";
// for(let ch of str){
//     str2 = str2 + ch + " ";
// }
// console.log(str2)

// for(let key in str){
//     console.log(key)
// }


// methods
// let str = "Hello"
// let upperCaseStr = str.toUpperCase();
// let lowerCaseStr = str.toLowerCase();
// let trimmedStr = str.trim();
// console.log(str, upperCaseStr, lowerCaseStr);
// console.log(str)
// console.log(trimmedStr)

// let firstName = "manas"
// let middleName = "kumar"
// let lastName = "lal"
// let fullName = firstName + middleName + lastName
// let fullName2 = firstName.concat(middleName, lastName)
// console.log(firstName)
// console.log(fullName)
// console.log(fullName2)


// let str = "I am a boy, and i am a boy"
// let check = str.includes("bts");
// console.log(check)
// console.log(str.indexOf("z"))
// console.log(str.charAt(2))

// console.log(str.replace("boy", "girl"))
// console.log(str.replaceAll("boy", "girl"))

// let username = "@manaskumarlal"

// console.log(username.slice(-8,11))
// console.log(username.substring(-8,11))

// let str = "alpha beta gamma"
// console.log(str.split(" "))


// let str = "i am a boy"
// str = str.replace("boy", "girl")
// console.log(str)


// question1
// let fullName = prompt("Enter your full name");

// let username =  `@${fullName.trim().replaceAll(" ","")}_${fullName.length}`
// console.log(username)

// question 2

// let str = prompt("Enter any string");
// let ch = prompt("Enter any character");

// let count=0;
// for (let val of str) {
//     if (val.toLowerCase() === ch.toLowerCase()) {
//         count++;
//     }
// }
// for (let index in str) {
//     if (str[index].toLowerCase() === ch.toLowerCase()) {
//         console.log("occurence position = ", index)
//         count++;
//     }
// }
// console.log("Count =", count)

// question 3

// let str = "hello i am a boy alsdjf ldsjflds f"
// console.log(str.split(" ").length)