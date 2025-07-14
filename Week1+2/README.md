 Section 2: Data Structures & Modern Operators
> Thực hành các kiến thức:
- Destructuring (Array & Object)
- Spread / Rest
- Short Circuiting
- Nullish Coalescing
- Logical Assignment
- Optional Chaining
- Object Looping

 File: `section2.js`
## ✅ Destructuring Array

```js
const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(first, second, third);
```

📌 Kết quả:
```
10 20 30
```

✔️ Giải thích:
- Gán từng phần tử trong mảng vào biến riêng biệt.
- `first = 10`, `second = 20`, `third = 30`.

---

## ✅ Spread Operator

```js
const moreNumbers = [...numbers, 40, 50];
console.log(moreNumbers);
```

📌 Kết quả:
```
[ 10, 20, 30, 40, 50 ]
```

✔️ Giải thích:
- Spread (`...numbers`) sao chép toàn bộ phần tử từ `numbers`.
- Thêm `40` và `50` vào cuối mảng mới.

---

## ✅ Rest Pattern & Parameters

```js
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
```

📌 Kết quả:
```
1 2 [ 3, 4, 5 ]
```

✔️ Giải thích:
- `a = 1`, `b = 2`, còn lại dồn vào mảng `others = [3, 4, 5]`.

```js
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4));
```

📌 Kết quả:
```
10
```

✔️ Giải thích:
- Rest parameters (`...args`) gom nhiều đối số thành mảng.
- `reduce()` tính tổng tất cả phần tử trong `args`.

---

## ✅ Short Circuiting

```js
console.log(0 || 'Fallback');
console.log(1 && 'Continue');
```

📌 Kết quả:
```
Fallback
Continue
```

✔️ Giải thích:
- `0 || 'Fallback'` → `0` là falsy → chọn `'Fallback'`.
- `1 && 'Continue'` → `1` là truthy → lấy `'Continue'`.

---

## ✅ Nullish Coalescing Operator

```js
const age = 0;
console.log(age ?? 18);
```

📌 Kết quả:
```
0
```

✔️ Giải thích:
- `??` chỉ dùng giá trị bên phải nếu bên trái là `null` hoặc `undefined`.
- Vì `age = 0` (hợp lệ), nên giữ nguyên.

---

## ✅ Logical Assignment Operators

```js
let user1 = { name: 'Alice', age: null };
user1.age ??= 25;
console.log(user1);
```

📌 Kết quả:
```
{ name: 'Alice', age: 25 }
```

✔️ Giải thích:
- `??=` gán giá trị mới nếu hiện tại là `null` hoặc `undefined`.

---

## ✅ Optional Chaining

```js
const user = { profile: { username: 'john' } };
console.log(user.profile?.username);
console.log(user.contact?.phone);
```

📌 Kết quả:
```
john
undefined
```

✔️ Giải thích:
- `?.` kiểm tra có tồn tại hay không trước khi truy cập.
- `user.contact` không có nên không lỗi, chỉ trả về `undefined`.

---

## ✅ Object Destructuring

```js
const person = { name: 'Bob', job: 'Dev' };
const { name, job } = person;
console.log(name, job);
```

📌 Kết quả:
```
Bob Dev
```

✔️ Giải thích:
- Tách thuộc tính `name` và `job` từ object ra biến riêng.

---

## ✅ Enhanced Object Literals

```js
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
```

📌 Kết quả:
```
Point: (10, 20)
```

✔️ Giải thích:
- Dùng cú pháp rút gọn để khai báo object.
- `print()` là phương thức viết tắt (shorthand method).

---

## ✅ Looping Object: Keys, Values, Entries

```js
const settings = { theme: 'dark', font: 'Arial' };
for (const key of Object.keys(settings)) console.log('Key:', key);
for (const val of Object.values(settings)) console.log('Value:', val);
for (const [k, v] of Object.entries(settings)) console.log(`${k}: ${v}`);
```

📌 Kết quả:
```
Key: theme
Key: font
Value: dark
Value: Arial
theme: dark
font: Arial
```

✔️ Giải thích:
- `Object.keys()` → lấy danh sách key.
- `Object.values()` → lấy danh sách value.
- `Object.entries()` → trả về mảng các cặp `[key, value]`.

---

✅ Vậy là bạn đã hiểu đầy đủ mọi phần của `section2.js`. Tiếp tục luyện tập với `section3.js` để nắm chắc hơn!



 Section 3: Functions & Strings
> Thực hành các kiến thức:
- String Methods
- Default Parameters
- Value vs Reference
- Higher-Order Functions
- Array HOFs: map, filter, reduce

 File: `section3.js`

 ## ✅ String Methods

```js
const lang = 'JavaScript';
console.log(lang.toUpperCase());
console.log(lang.includes('Script'));
console.log(lang.slice(0, 4));
```

📌 Kết quả:
```
JAVASCRIPT
true
Java
```

✔️ Giải thích:
- `toUpperCase()`: viết hoa toàn bộ.
- `includes()` kiểm tra chuỗi con.
- `slice(0, 4)` cắt từ chỉ số 0 đến 3.

---

## ✅ Default Parameters

```js
function greet(name = 'Guest') {
  console.log(\`Hello, \${name}\`);
}
greet();
greet('Anna');
```

📌 Kết quả:
```
Hello, Guest
Hello, Anna
```

✔️ Nếu không truyền `name`, nó sẽ mặc định là `'Guest'`.

---

## ✅ Value vs Reference

```js
let val1 = 100;
let val2 = val1;
val2 = 200;
console.log(val1); // vẫn là 100

const objA = { score: 90 };
const objB = objA;
objB.score = 100;
console.log(objA.score);
```

📌 Kết quả:
```
100
100
```

✔️ `val1` và `val2` là kiểu **primitive** → gán **giá trị**.  
✔️ `objA` và `objB` là **object** → gán **tham chiếu**, nên thay đổi ảnh hưởng đến cả hai.

---

## ✅ Higher-Order Functions

```js
function double(n) {
  return n * 2;
}
function operate(fn, val) {
  return fn(val);
}
```

📌 Kết quả:
```
10
```

✔️ `operate(double, 5)` gọi `double(5)` → `10`.

---

## ✅ Array Higher-Order Functions: map, filter, reduce

```js
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
const total = nums.reduce((acc, cur) => acc + cur, 0);
```

📌 Kết quả:
```
[ 2, 4, 6, 8 ]
[ 2, 4 ]
10
```

✔️ Giải thích:
- `map`: nhân đôi từng phần tử.
- `filter`: lọc số chẵn.
- `reduce`: cộng tổng các phần tử.
