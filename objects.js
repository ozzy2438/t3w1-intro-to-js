// objects

let person1 = {
    name: "Rick",
    age: 90,
    city: "London",
    greetingMessage: function() {
        console.log("Pickle picchhhh");
    }
};

console.log(person1.name);
console.log(person1.age);
console.log(person1.city);


let person2 = {
    name: "Morty",
    age: 16,
    city: "London",
    greetingMessage: function() {  // function kullanarak `this` sorununu çözdük
        console.log("My name is " + this.name + " and I am " + this.age + " years old");
    }
};

console.log(person2.name);
person2.greetingMessage();
console.log(person2["name"]);


// functions

function calculateArea(width, length){
    return width * length;
}
let area = calculateArea(10, 20);
console.log(area);


// methods 

function greet(name) { 
    console.log(`Hello, ${name}!`);  // template literal demek yani string içinde değişken kullanmak
}
greet("Rick");

let person3 = {
    name: "Janice",
    age: 23,
    city: "Melbourne",
    greetingMessage: greet
};
person3.greetingMessage("Janice");

console.log(person3.name);
console.log(person3.greetingMessage);


// Nested object example (person4)



// `voiceEmailMessage` fonksiyonu yerine, dış nesne olan `person4`'e erişebilmek için şu şekilde yapabilirsin:
let person4 = {
    name: "Alice",
    age: 20,
    city: "Istanbul",
    greetingMessage: greet,
    contact: {
        phone: 123456789,
        email: "alice@gmail.com",
        voiceEmailMessage: function() {
            console.log("Hello, my name is " + person4.name + " and I am " + person4.age + " years old");
        }
    }
};

console.log(person4.contact.voiceEmailMessage());

console.log(person4.contact.voiceEmailMessage());

console.log(person4.contact.voiceEmailMessage());  // Fonksiyonu çağırarak çalıştırıyoruz
console.log(Object.keys(person4));
console.log(Object.values(person4.contact));
console.log(Object.entries(person4.contact));

