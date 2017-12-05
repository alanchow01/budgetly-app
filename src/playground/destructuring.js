// const person = {
//   name: 'alan',
//   age: 348,
//   location: {
//     city: 'Toronto',
//     temp: 6
//   }
// };
//
// const {name = 'Quark', age} = person;
//
// console.log(`${name} is ${age}`)
//
// const { city, temp:temperature } = person.location;
// if (city && temperature) {
// console.log(`it's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'The Expanse',
//   author: 'James SA Corey',
//   publisher: {
//     name: 'Boom! Studios'
//   }
// }
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

// array destructuring

// const address = ['123 West 10th Street', 'Vancouver', 'BC', 'H0H0H0'];
// const [street, city, province, zip] = address;
// console.log(`You are in ${city} ${province}`);

const item = ['Coffee', '$2.00', '$3.00', '$4.00'];
const [forSale, ,medium] = item;
console.log(`a medium ${forSale} costs ${medium}`);
