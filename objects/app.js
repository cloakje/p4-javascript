let output = document.querySelector(".output");

// const car = {
//   // properties
//   wheels: 4,
//   exhaust: 1,
//   brand: "Nissan",
//   model: "GTR R35",
//   color: "black",
//   weight: 1725,
//   repairs: ["oil", "timing belt", "wheels"],
//   //methods
//   drive: function () {
//     return `vroom vroom`;
//   },
//   changeColor(color) {
//     return (this.color = color);
//   },
// };

// // console.log(`ik heb een ${car.brand} ${car.model}`);
// // console.log(car.drive());
// // console.log(`mijn ${car.repairs[1]} moet vervangen worden`);
// // console.log(car.changeColor("red"));

// const person = {
//   name: "Bart",
//   lastname: "Slagboom",
//   age: 19,
//   hobby: "gaming",
//   height: 185,

//   walk: function () {
// return `ik ben aan het lopen`
//   },
//   run: function () {
//     return `ik ben aan het rennen`
//   },
//   sleeping: function () {
// return `ik ben aan het slapen `
//   },

//   talk: function(){
//     return `mijn naam is ${this.name} en ik ben ${this.age} jaar oud.`
//   },
//   talking: function(talk){
//     return (this.talk = talk);
//   }
// };

// console.log(person.talking("Bart"));

// const newPerson = {
//     //spread operator
//     ...person,
//     name: "Sanne",
//     height: "1.50",
//     weight: 56
// }

// // console.log(newPerson);
// // console.log(newPerson.talking("mijn naame is sanne "));

// output.innerHTML += `<h1> ${person.name} </h1>
// <h2>${person.age}</h2>`

// output.innerHTML += `<h1> ${newPerson.name} </h1>
// <h2>${newPerson.weight}</h2>`

// //maak 3 objecten van dieren met de naam, leeftijd, dieet en geluid
// //en stop nu alle objecten in 1 array genaamd dierentuin

// const lion = {
//     name: "Simba",
//     age: 23,
//     diet: "meat",
//     sound: "rawr"
// }

// const monkey = {
//     name: "bram",
//     age: "gerrit",
//     diet: "bananas",
//     sound: "oeh oeh ah ah"
// }

// const hippo = {
//     name: "jason",
//     age: 33,
//     diet: "cabbage and watermelon",
//     sound: "guh guh"
// }

// let zoo = [lion, monkey, hippo];

// //loop met een FOR OF loop door de array en laat nu in je console alle namen en sounds van alle dieren zien hehe
// for(let animal of zoo){
//     output.innerHTML += `<h1> ${animal.name}</h1>
//     <h2> ${animal.sound}</h2>`

// }

const book = {
  title: "jason's gare leven",
  author: "pawlos abraham",
  publisher: "fabian luijten",
  year: 2015,
  sales: 5039,
  price: "€54,99",
  image: "object-foto.webp",
};

output.innerHTML += ` <h1>${book.title}</h1>
    <h2>${book.author}</h2>
    <p>${book.publisher}</p>
    <p>${book.year}</p>
    <p>${book.sales}</p>
    <p>${book.price}</p> 
    <img src=${book.image} alt="" />
    `;
