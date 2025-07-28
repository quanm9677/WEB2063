# Advanced DOM and Events

## 1. Bubbling and Capturing (Lan truyền và bắt sự kiện)

**Lý thuyết:**
- **Bubbling:** Khi một sự kiện xảy ra trên một phần tử, nó sẽ lan truyền (bubble) lên các phần tử cha theo thứ tự từ trong ra ngoài (từ target lên document).
- **Capturing:** Ngược lại, sự kiện sẽ đi từ ngoài vào trong (từ document xuống target) trước khi đến phần tử mục tiêu.
- Có thể kiểm soát giai đoạn này bằng tham số thứ 3 của `addEventListener` (`true` cho capturing, `false` cho bubbling).

**Ví dụ:**
```html
<div id="parent">
  Parent
  <button id="child">Child</button>
</div>
<script>
// Capturing
parent.addEventListener('click', function() {
  alert('Parent (capturing)');
}, true);
// Bubbling
child.addEventListener('click', function() {
  alert('Child (bubbling)');
}, false);
</script>
```
Khi click vào "Child", sẽ hiện lần lượt hai alert: "Parent (capturing)" rồi "Child (bubbling)".

---

## 2. Page Navigation (Điều hướng trang)

**Lý thuyết:**
- Sử dụng các phương thức như `window.location`, `window.history` để điều hướng hoặc lấy thông tin về trang hiện tại.
- Có thể dùng các thẻ `<a>` hoặc JavaScript để điều hướng mà không reload trang (Single Page Application).
- Có thể cuộn đến một phần tử cụ thể bằng `scrollIntoView`.

**Ví dụ:**
```html
<button class="btn-scroll">Scroll to Section 2</button>
<section id="section2">...</section>
<script>
document.querySelector('.btn-scroll').addEventListener('click', function () {
  document.querySelector('#section2').scrollIntoView({ behavior: 'smooth' });
});
</script>
```
Khi click nút, trang sẽ cuộn mượt đến section 2.

---

## 3. DOM Traversing (Duyệt DOM)

**Lý thuyết:**
- `parentNode` / `parentElement`: Lấy phần tử cha.
- `children` / `childNodes`: Lấy các phần tử con.
- `nextElementSibling` / `previousElementSibling`: Lấy phần tử anh/chị em kế tiếp hoặc trước đó.
- `closest(selector)`: Tìm phần tử cha gần nhất khớp với selector.

**Ví dụ:**
```html
<h1>Heading <span class="highlight">Important</span></h1>
<script>
const heading = document.querySelector('h1');
// Con
console.log(heading.querySelectorAll('.highlight'));
console.log(heading.firstElementChild);
// Cha
console.log(heading.parentElement);
console.log(heading.closest('.container'));
// Anh em
console.log(heading.nextElementSibling);
console.log(heading.previousElementSibling);
</script>
```
Các lệnh trên sẽ in ra các phần tử liên quan trong DOM.

---

## 4. Passing Arguments to Event Handlers (Truyền tham số vào hàm xử lý sự kiện)

**Lý thuyết:**
- Không thể truyền trực tiếp tham số khi gán handler, nhưng có thể dùng hàm ẩn danh (arrow function) hoặc `.bind()` để truyền tham số.

**Ví dụ:**
```html
<button class="btn-greet">Chào 1</button>
<button class="btn-greet2">Chào 2 (dùng bind)</button>
<script>
function greet(name, e) {
  alert(`Hello, ${name}`);
  console.log('Button clicked:', e.target);
}
// Cách 1: function ẩn danh
btn1.addEventListener('click', function(e) {
  greet('Minh Quân', e);
});
// Cách 2: dùng bind
btn2.addEventListener('click', greet.bind(null, 'Quân Nguyễn'));
</script>
```
Khi click từng nút sẽ hiện alert với tên tương ứng.
