// Object destructuring ************ /

// const person = {
//   name: "Jane",
//   age: "33",
//   location: {
//     city: "St Pete",
//     temp: 87
//   }
// };

// const {name: firstName = 'unknown', age, location} = person;
// console.log(`${firstName} is ${age}`)

// //const {city, temp} = location;
// const {city, temp: temperature} = person.location;
// if(city && temperature){
//   console.log(`it's ${temperature} in ${city}`)
// }

// const book = {
//   title: "Some book",
//   author: "some author",
//   publisher: {
//     //name: "Penguin"
//   }
// };



// const {name: publisherName = 'self published'} = book.publisher;

// console.log(publisherName)

// Array destructuring ************ /

// const address = ['123 S Main St', 'Miami', 'Florida', '33704'];

// const [, city, state='NY'] = address;

// console.log(`I'm in ${city}, ${state}`);


const items = ['coffee', '$2.00', '$3.00', '$5.00'];

const [coffee, , priceMed] = items;

console.log(`${coffee} costs ${priceMed}`)

