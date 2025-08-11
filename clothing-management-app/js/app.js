// app.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize app
    checkAuthStatus();
    loadProducts();
    setupNavigation();
    setupEventListeners();
    setupAuthSwitching();
    showPage('home-page');
});

function setupNavigation() {
    // Navigation event listeners
    document.getElementById('nav-home').addEventListener('click', (e) => {
        e.preventDefault();
        showPage('home-page');
        updateActiveNav('nav-home');
    });

    document.getElementById('nav-products').addEventListener('click', (e) => {
        e.preventDefault();
        showPage('products-page');
        updateActiveNav('nav-products');
        loadProducts();
    });

    document.getElementById('nav-add').addEventListener('click', (e) => {
        e.preventDefault();
        showPage('product-form-page');
        updateActiveNav('nav-add');
        resetForm();
    });

    document.getElementById('nav-login').addEventListener('click', (e) => {
        e.preventDefault();
        showPage('login-page');
        updateActiveNav('nav-login');
    });

    // Start button
    document.getElementById('start-btn').addEventListener('click', (e) => {
        e.preventDefault();
        showPage('products-page');
        updateActiveNav('nav-products');
        loadProducts();
    });
}

function setupEventListeners() {
    // Product form
    document.getElementById('product-form').addEventListener('submit', e => {
        e.preventDefault();
        const form = e.target;
        if (!validateForm(form)) {
            showNotification('Vui lòng kiểm tra lại thông tin', 'error');
            return;
        }
        const data = Object.fromEntries(new FormData(form).entries());
        data.quantity = Number(data.quantity);

        if (form.dataset.editId) {
            updateProduct(form.dataset.editId, data);
        } else {
            addProduct(data);
        }
        form.reset();
        form.removeAttribute('data-edit-id');
        showPage('products-page');
        updateActiveNav('nav-products');
    });

    // Cancel button
    document.getElementById('cancel-btn').addEventListener('click', () => {
        showPage('products-page');
        updateActiveNav('nav-products');
        resetForm();
    });

    // Add product button
    document.getElementById('add-product-btn').addEventListener('click', () => {
        showPage('product-form-page');
        updateActiveNav('nav-add');
        resetForm();
    });

    // Login form
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    
    // Register form
    document.getElementById('register-form').addEventListener('submit', handleRegister);

    // Confirm delete button
    document.getElementById('confirm-delete').addEventListener('click', () => {
        const deleteModal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
        const productId = document.getElementById('deleteModal').dataset.productId;
        deleteProduct(productId);
        deleteModal.hide();
    });
}

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.style.display = 'none';
    });
    // Show target page
    document.getElementById(pageId).style.display = 'block';
}

function updateActiveNav(activeNavId) {
    // Remove active class from all nav items
    document.querySelectorAll('.nav-link').forEach(nav => {
        nav.classList.remove('active');
    });
    // Add active class to current nav item
    document.getElementById(activeNavId).classList.add('active');
}

function resetForm() {
    const form = document.getElementById('product-form');
    form.reset();
    form.removeAttribute('data-edit-id');
    document.getElementById('form-title').innerHTML = '<i class="fas fa-plus me-2"></i>Thêm sản phẩm mới';
    
    // Clear validation states
    form.querySelectorAll('.form-control, .form-select').forEach(field => {
        field.classList.remove('is-invalid', 'is-valid');
    });
}


