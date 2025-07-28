// === SECTION 2 – Data Structures & Modern Operators ===

// ✅ Destructuring Array
console.log('--- Destructuring Array ---');
const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(first, second, third);

// ✅ Spread Operator
console.log('--- Spread Operator ---');
const moreNumbers = [...numbers, 40, 50];
console.log(moreNumbers);

// ✅ Rest Pattern & Parameters
console.log('--- Rest Pattern ---');
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4));

// ✅ Short Circuiting
console.log('--- Short Circuiting ---');
console.log(0 || 'Fallback');
console.log(1 && 'Continue');

// ✅ Nullish Coalescing Operator
console.log('--- Nullish Coalescing ---');
const age = 0;
console.log(age ?? 18);
console.log(age || 18);

// ✅ Logical Assignment Operators
console.log('--- Logical Assignment Operators ---');
let user1 = { name: 'Alice', age: null };
user1.age ??= 25;
console.log(user1);

// ✅ Optional Chaining
console.log('--- Optional Chaining ---');
const user = { profile: { username: 'john' } };
console.log(user.profile?.username);
console.log(user.contact?.phone);

// ✅ Object Destructuring
console.log('--- Object Destructuring ---');
const person = { name: 'Bob', job: 'Dev' };
const { name, job } = person;
console.log(name, job);

// ✅ Enhanced Object Literals
console.log('--- Enhanced Object Literals ---');
const x = 10;
const y = 20;
const point = {
  x,
  y,
  print() {
    console.log(`Point: (${x}, ${y})`);
  },
};
point.print();

// ✅ Looping Object
console.log('--- Looping Object ---');
const settings = { theme: 'dark', font: 'Arial' };
for (const key of Object.keys(settings)) {
  console.log('Key:', key);
}
for (const val of Object.values(settings)) {
  console.log('Value:', val);
}
for (const [k, v] of Object.entries(settings)) {
  console.log(`${k}: ${v}`);
}
