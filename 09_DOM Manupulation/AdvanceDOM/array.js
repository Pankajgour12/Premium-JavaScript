

/* const languages =['javascript', 'python', 'c', "java", "c++"]
 */
//? .length 
// console.log(languages.length) // output : 5

/* const actor = [
    {
        name: 'actor 1',
        payment: 200
    },
    {
        name: 'actor 2',
        payment: 100
    },
    {
        name: 'actor 3',
        payment: 300
    },

] */

/* 
for( let i= 0 ; i< actor.length ; i++){
    console.log(actor[i].name);
    console.log(actor[i].payment-10);

} */

/*  actor.forEach((actor)=>{
    
   actor.payment =  actor.payment-10
     
 })
 console.log(actor);
*/



/*   for (const item of actor) {
    
  //   console.log(item);
  //   console.log(item.payment-10);
    item.payment = item.payment-10;
    item.name = item.name.toUpperCase();
  }

  actor.forEach((item)=>{
      console.log(item.name, item.payment);
  })  
  // console.log(actor);
   */





// forEach -> kuch bhi return nahi karta hai 


//! filter ->  filter returns elements that satisfy condition

/* 
    const myNums = [ 1,2,3,4,5,6,7,8,9,10]


 let newNums =  myNums.filter((num)=> num > 5
        )
        // console.log(newNums); */



/* 
const books = [
  {
    title: "Data Structures Basics",
    writer: "R.K. Sharma",
    subject: "Computer Science",
    edition: 2020,
    publisherYear: 2020
  },
  {
    title: "Advanced Data Structures",
    writer: "R.K. Sharma",
    subject: "Computer Science",
    edition: 2021,
    publisherYear: 2021
  },
  {
    title: "Organic Chemistry",
    writer: "M.L. Khanna",
    subject: "Chemistry",
    edition: 2019,
    publisherYear: 2019
  },
  {
    title: "Physical Chemistry",
    writer: "M.L. Khanna",
    subject: "Chemistry",
    edition: 2019,
    publisherYear: 2022
  },
  {
    title: "Modern Physics",
    writer: "S.P. Verma",
    subject: "Physics",
    edition: 2022,
    publisherYear: 2022
  },
  {
    title: "Quantum Mechanics",
    writer: "S.P. Verma",
    subject: "Physics",
    edition: 2023,
    publisherYear: 2023
  },
  {
    title: "English Grammar Pro",
    writer: "N. Gupta",
    subject: "English",
    edition: 2018,
    publisherYear: 2018
  },
  {
    title: "Spoken English",
    writer: "N. Gupta",
    subject: "English",
    edition: 2020,
    publisherYear: 2020
  },
  {
    title: "World History",
    writer: "A.K. Singh",
    subject: "History",
    edition: 2017,
    publisherYear: 2021
  },
  {
    title: "Indian History",
    writer: "A.K. Singh",
    subject: "History",
    edition: 2021,
    publisherYear: 2021
  }
]; */



/*  const newBook = books.filter((book)=> book.subject === 'Chemistry')

 console.log( newBook);
  */
/* const newBook = books.filter((book)=> book.edition >= 2020 && book.subject === 'Computer Science')

console.log( newBook);
*/





//! map  -> map creates a new array by transforming each element
/* 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



const newNums = myNums
    .filter((num) => num > 5).
     map((num) => num * 10)

console.log(newNums);

 */

//! reduce  -> reduce converts array → single value

/*  const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let num= myNums.reduce((acc,curr)=> {
    // console.log(`acc ${acc}  cuur ${curr}`);
   return acc > curr ? acc : curr
}) */

// console.log( num);
/*
const total = myNums.reduce((acc,currVal)=>{
    console.log(`acc ${acc}  and currentVal ${currVal}`);
    return acc + currVal;
},0)

console.log(total);
 */

const users = [
 {name:"A", age:20},
 {name:"B", age:20},
 {name:"C", age:30}
]

const grouped = users.reduce((acc, user)=>{
   acc[user.age] = acc[user.age] || []
   acc[user.age].push(user)
   return acc
}, {})

// console.log(grouped);



const arr = ["a","b","a","c",'b',"a"]

const freq = arr.reduce((acc, curr)=>{
   acc[curr] = (acc[curr] || 0) + 1
   console.log(` ${acc[curr]} and currentVal ${curr}`);
   
   return acc
}, {})








