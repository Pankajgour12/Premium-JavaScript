

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


//! filter 

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





//! map 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



const newNums = myNums
    .filter((num) => num > 5).
     map((num) => num * 10)

console.log(newNums);






