// Lấy phần tử container và form
const productList = document.querySelector("#product-list");
const filterForm = document.getElementById("filter-form");

// Biến lưu trữ danh sách sản phẩm gốc
let allProducts = [];

// Hàm lấy dữ liệu sản phẩm từ JSON Server
async function fetchProducts() {
  try {
    const response = await fetch("http://localhost:3000/products");
    if (!response.ok) throw new Error("Không thể lấy dữ liệu");
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Lỗi:", error.message);
    return [];
  }
}

// Hàm hiển thị danh sách sản phẩm
function displayProducts(products) {
  const productHTML = products
    .map(
      (product) => `
      <div class="product-card hidden">
        <h3>${product.name}</h3>
        <p>Giá: $${product.price}</p>
        <p>Danh mục: ${product.category}</p>
      </div>
    `
    )
    .join("");

  productList.innerHTML = productHTML;

  // Hiệu ứng reveal on scroll
  const cards = document.querySelectorAll(".product-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.replace("hidden", "visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => observer.observe(card));
}

// Hàm khởi tạo
async function init() {
  const products = await fetchProducts();
  allProducts = [...products]; // Lưu toàn bộ sản phẩm
  displayProducts(allProducts); // Hiển thị toàn bộ
}

// Bắt sự kiện lọc giá
filterForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
  const maxPrice =
    parseFloat(document.getElementById("maxPrice").value) || Infinity;

  const filtered = allProducts.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  displayProducts(filtered);
});

// Chạy ứng dụng
init();
