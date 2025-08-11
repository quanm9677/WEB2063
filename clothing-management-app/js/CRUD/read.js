// crud/read.js
let products = [];

async function loadProducts() {
    try {
        products = await apiGet('products');
        displayProducts(products);
        updateAddProductButton();
    } catch (error) {
        showNotification('Lỗi khi tải sản phẩm', 'error');
    }
}

function updateAddProductButton() {
    const addButton = document.getElementById('add-product-btn');
    if (addButton) {
        addButton.className = 'btn btn-success';
        addButton.innerHTML = '<i class="fas fa-plus me-2"></i>Thêm sản phẩm mới';
        addButton.onclick = () => {
            showPage('product-form-page');
            updateActiveNav('nav-add');
            resetForm();
        };
    }
}

function displayProducts(products) {
    const container = document.getElementById('products-container');
    if (products.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center">
                <div class="alert alert-info">
                    <i class="fas fa-info-circle me-2"></i>
                    Chưa có sản phẩm nào
                </div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = products.map(product => `
        <div class="col-md-4 col-lg-3 mb-4">
            <div class="card product-card h-100">
                <div class="position-relative">
                    <img src="${product.imageUrl}" class="card-img-top product-image" alt="${product.title}" 
                         onerror="this.src='https://via.placeholder.com/300x200?text=Không+có+hình+ảnh'">
                    <span class="badge bg-primary product-badge">${product.category}</span>
                    <span class="badge bg-secondary quantity-badge">SL: ${product.quantity}</span>
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.title}</h5>
                    <div class="mt-auto">
                        <div class="btn-group w-100" role="group">
                            <button class="btn btn-outline-primary btn-sm" onclick="editProduct('${product.id}')">
                                <i class="fas fa-edit me-1"></i>Sửa
                            </button>
                            <button class="btn btn-outline-danger btn-sm" onclick="showDeleteConfirmation('${product.id}', '${product.title}')">
                                <i class="fas fa-trash me-1"></i>Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (!product) {
        showNotification('Không tìm thấy sản phẩm', 'error');
        return;
    }

    // Fill form with product data
    const form = document.getElementById('product-form');
    form.title.value = product.title;
    form.quantity.value = product.quantity;
    form.imageUrl.value = product.imageUrl;
    form.category.value = product.category;
    
    // Set edit mode
    form.dataset.editId = id;
    document.getElementById('form-title').innerHTML = '<i class="fas fa-edit me-2"></i>Cập nhật sản phẩm';
    
    // Show form page
    showPage('product-form-page');
    updateActiveNav('nav-add');
}

function showDeleteConfirmation(id, productName) {
    const modal = document.getElementById('deleteModal');
    modal.dataset.productId = id;
    document.getElementById('delete-product-name').textContent = productName;
    
    const deleteModal = new bootstrap.Modal(modal);
    deleteModal.show();
}
