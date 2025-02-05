// function roadTripPlaylist(playlist, maxDuration) {
//   // Your code here
// }
// Example Input:

// roadTripPlaylist(playlist, 15);
// Example Output:

// ["Song A", "Song B", "Song D"] // Total: 14.5 minutes

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "travelling", "coding"],
};

for (let key in person) {
  console.log(`${key}, ${person[key]}`);
}

// keys(), values(), entries()
// console.log(Object.keys(person));
// console.log(Object.values(person));
// Object.entries(person).forEach(([key, value]) => console.log(`${key}, ${value}`));
// deconstruction
const [firstIndex, secoundIndex] = [1, 2];

const { firstName, lastName } = person;
// concatination with deconstruction
//array
const firstArr = [1, 2, 3];
const secoundArr = [4, 5, 6];
const concatArr = [...firstArr, ...secoundArr];
const conactArr2 = firstArr.concat(secoundArr);
// concatination with deconstruction
//Object
const firstObj = { name: "John" };
const secoundObj = { name: "Jane", age: 30 };

const concatObj = { ...secoundObj, ...firstObj };
const concatObj2 = Object.assign({}, secoundObj, firstObj);
// javascript create object with reference '1'
const testObj = { name: "John", age: 30 };
// javascript create object with reference '2' = '1'
// 2 and 1 is the same object
//copy
const newTestObj = testObj;
//changing reference '2' will also change reference '1'
newTestObj.name = "Jane";
// console.log(testObj);

// shallow copy is only one level deep
// address is still the same object with same reference
//address is the same object with the same reference 1 adress{} = 2 shallowCopy
const original = {
  name: "Alice",
  address: {
    city: "New York",
    country: "USA",
  },
};
//shallow copy
const shallowCopy = { ...original };
shallowCopy.name = "Bob";
shallowCopy.address.city = "LA";
console.table(original);

//deep copy
//old way to deep copy
// const deepCopy = JSON.parse(JSON.stringify(original))
// new way to deep copy
// const deepCopy = structuredClone(original)

deepCopy.name = "Bob";
deepCopy.address.city = "LA";
console.table(original);

// JSON
//JavaScript Object Notation

const orginalJSON = JSON.stringify(original);
console.log(typeof orginalJSON);

const jsonObj =
  '{"name":"Alice","address":{"city":"New York","country":"USA"}}';
console.log(typeof JSON.parse(jsonObj));

//Object freeze
// const frozenObj = Object.freeze(original)
// frozenObj.name = 'Bob'
//console.log(Object.isFrozen(frozenObj));
//Object hasOwn
//console.log(Object.hasOwn(frozenObj, 'firstName'));
//Object seal
const object1 = {
  property1: 42,
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// Expected output: 33

delete object1.property1; // Cannot delete when sealed
console.table(object1);
// Expected output: 33
