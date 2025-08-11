// crud/delete.js
async function deleteProduct(id) {
    try {
        await apiDelete(`products/${id}`);
        showNotification('Xóa sản phẩm thành công!', 'success');
        loadProducts();
    } catch (error) {
        showNotification('Lỗi khi xóa sản phẩm: ' + error.message, 'error');
    }
}
