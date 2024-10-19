// // iterators
// let fruitChoices = ["apple", "banana", "orange"];

// for (let i = 0; i < fruitChoices.length; i++) {
//     const element = fruitChoices[i];
//     console.log(element);
    
// }

// for (let i=0 ; i<fruitChoices.length ; i++){
//     console.log(fruitChoices[i]);
// }

// // for of loop

// for (let fruit of fruitChoices){
//     console.log("for of loop", fruit);
// }


// // Using for loop to iterate through an array
// for (let index = 0; index < fruitChoices.length; index++) {
//     const element = fruitChoices[index];
//     console.log(element);
//     console.log(`The fruit of this iteration is ${fruitChoices[index]}`);
// }

// // Another loop example: a basic 'for' loop
// for (let i = 0; i < 5; i++) {
//     console.log(`This is the ${i} iteration of the loop`); // String interpolation
//     console.log("This is the " + i + " iteration of the loop"); // String concatenation
// }

// // Using forEach to iterate through the same array
// fruitChoices.forEach(element => {
//     console.log(element.toLocaleUpperCase());
// });

// // for of 
// for (const fruit of fruitChoices){ // for of means for each element in the array
//     console.log(fruit);
// }

// // for in
// for (const index in fruitChoices){
//     console.log(fruitChoices[index]);
// }
// // map
// let newArray = fruitChoices.map(fruit => {
//     return fruit.toLocaleUpperCase();
// });
// // amp and substring 
// let newArray2 = fruitChoices.map(fruit => {
//     return fruit.substring(0, 3);
// });


// // filter
// let newArray3 = fruitChoices.filter(fruit => {
//     return fruit.length > 5;
// });
// // filer ==, ===,!=, !==
// let newArray4 = fruitChoices.filter(fruit => {
//     return fruit === "banana";
// });
// let newArray5 = fruitChoices.filter(fruit => {
//     return fruit !== "banana";
// });
// let newArray6 = fruitChoices.filter(fruit => {
//     return fruit === "banana";
// });
// let newArray7 = fruitChoices.filter(fruit => {
//     return fruit != "banana" && fruit.length > 5;
// });

// console.log(newArray);
// console.log(newArray2);
// console.log(newArray3);
// console.log(newArray4);
// console.log(newArray5);
// console.log(newArray6);
// console.log(newArray7);




// // ||, &&, !, ?
// let x = 10;
// let y = 20;
// let z = 30;

// console.log(x > y || x > z); // bu demek oluyor ki x, y den büyük veya x, z den büyük
// console.log(x > y && x > z); // bu demek oluyor ki x, y den büyük ve x, z den büyük
// console.log(!(x > y)); // bu demek oluyor ki x, y den büyük değil
