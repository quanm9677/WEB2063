// Lấy phần tử container
const productList = document.querySelector("#product-list");

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
  // Sử dụng map để tạo HTML cho mỗi sản phẩm
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

  // Hiển thị hiệu ứng cuộn (Reveal on Scroll)
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

  // Sử dụng Spread Operator để sao chép và lọc sản phẩm (CLO1, CLO3)
  const filteredProducts = [...products].filter(
    (product) => product.price > 50
  );

  displayProducts(filteredProducts);
}

// Chạy ứng dụng
init();