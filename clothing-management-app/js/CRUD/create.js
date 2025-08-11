// crud/create.js
async function addProduct(productData) {
    try {
        await apiPost('products', productData);
        showNotification('Thêm sản phẩm thành công!', 'success');
        loadProducts();
    } catch (error) {
        showNotification('Lỗi khi thêm sản phẩm: ' + error.message, 'error');
    }
}
