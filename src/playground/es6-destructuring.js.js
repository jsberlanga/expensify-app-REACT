//
// Object destructuring
//

// const person = {
//   name: 'Julio',
//   age: 31,
//   location: {
//     city: 'Krakow',
//     temp: 12
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// const { city, temp: temperature} = person.location;

// console.log(`${firstName} is ${age} years old.`);
// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//
// Array Destructuring
//

const address = ['Dobrego Pasterza 120', 'Krakow', , '31-416'];
const [, city, region = 'Malopolska'] = address;

console.log(`You are in ${city} ${region}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink, small, medium, large] = item;
console.log(`A Medium ${drink} costs ${medium}`)


const add = ({a, b}, c) => {
  return a + b + c;
}

console.log(add({a: 1, b: 2}, 100))