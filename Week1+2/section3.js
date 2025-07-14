// === SECTION 3 – Functions & Strings ===

// ✅ Working with Strings
console.log('--- String Methods ---');
const lang = 'JavaScript';
console.log(lang.toUpperCase());
console.log(lang.includes('Script'));
console.log(lang.slice(0, 4));

// ✅ Default Parameters
console.log('--- Default Parameters ---');
function greet(name = 'Guest') {
  console.log(`Hello, ${name}`);
}
greet();
greet('Anna');

// ✅ Value vs Reference
console.log('--- Value vs Reference ---');
let val1 = 100;
let val2 = val1;
val2 = 200;
console.log(val1); // primitive

const objA = { score: 90 };
const objB = objA;
objB.score = 100;
console.log(objA.score); // reference

// ✅ Higher-Order Functions
console.log('--- Higher-Order Functions ---');
function double(n) {
  return n * 2;
}
function operate(fn, val) {
  return fn(val);
}
console.log(operate(double, 5));

// HOFs: map, filter, reduce
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log(doubled);

const evens = nums.filter(n => n % 2 === 0);
console.log(evens);

const total = nums.reduce((acc, cur) => acc + cur, 0);
console.log(total);
