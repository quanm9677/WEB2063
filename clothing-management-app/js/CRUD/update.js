// crud/update.js
async function updateProduct(id, productData) {
    try {
        await apiPut(`products/${id}`, productData);
        showNotification('Cập nhật sản phẩm thành công!', 'success');
        loadProducts();
    } catch (error) {
        showNotification('Lỗi khi cập nhật sản phẩm: ' + error.message, 'error');
    }
}
