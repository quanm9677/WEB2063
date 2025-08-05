const urlParams = new URLSearchParams(location.search);
const id = urlParams.get('id');

// Validation functions
function validateTitle(title) {
    if (!title || title.trim().length === 0) {
        return "Title không được để trống";
    }
    if (title.trim().length < 2) {
        return "Title phải có ít nhất 2 ký tự";
    }
    if (title.trim().length > 100) {
        return "Title không được quá 100 ký tự";
    }
    return null;
}

function validateName(name) {
    if (!name || name.trim().length === 0) {
        return "Name không được để trống";
    }
    if (name.trim().length < 2) {
        return "Name phải có ít nhất 2 ký tự";
    }
    if (name.trim().length > 200) {
        return "Name không được quá 200 ký tự";
    }
    return null;
}

function validatePrice(price) {
    if (!price || price === "") {
        return "Price không được để trống";
    }
    if (isNaN(price) || parseFloat(price) < 0) {
        return "Price phải là số dương";
    }
    return null;
}

function validateImage(image) {
    if (!image || image.trim().length === 0) {
        return "Image URL không được để trống";
    }
    try {
        new URL(image);
    } catch {
        return "Image URL không hợp lệ";
    }
    return null;
}

function showError(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + 'Error');
    field.classList.add('is-invalid');
    errorDiv.textContent = errorMessage;
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + 'Error');
    field.classList.remove('is-invalid');
    errorDiv.textContent = '';
}

// Image preview functionality
document.getElementById('image').addEventListener('input', function() {
    const imageUrl = this.value;
    const preview = document.getElementById('imagePreview');
    
    if (imageUrl && validateImage(imageUrl) === null) {
        preview.src = imageUrl;
        preview.onerror = function() {
            this.src = 'https://via.placeholder.com/200x200?text=Invalid+Image';
        };
    } else {
        preview.src = 'https://via.placeholder.com/200x200?text=No+Image';
    }
});

async function getDetail() {
    if (!id) return; // Nếu không có id => đang dùng chức năng thêm mới
    
    // Validate ID format
    if (id && !/^[a-zA-Z0-9]+$/.test(id)) {
        alert("ID không hợp lệ!");
        location.href = './index.html';
        return;
    }

    try {
        const res = await axios.get(`http://localhost:3000/products/${id}`); // Lấy dữ liệu đổ ra form
        const oldProduct = res.data;
        document.getElementById('title').value = oldProduct.title;
        document.getElementById('name').value = oldProduct.name;
        document.getElementById('price').value = oldProduct.price;
        document.getElementById('image').value = oldProduct.image;
        
        // Update image preview
        const preview = document.getElementById('imagePreview');
        if (oldProduct.image) {
            preview.src = oldProduct.image;
        }
        
        // Update UI for edit mode
        document.getElementById('pageTitle').textContent = 'Edit Product';
        document.getElementById('submitBtn').textContent = 'Update Product';
        
    } catch (error) {
        console.error(error);
        alert("Không thể tải thông tin sản phẩm!");
        // Redirect back to product list if product not found
        location.href = './index.html';
    }
}

getDetail(); // Gọi hàm để đổ dữ liệu nếu là chức năng edit

// Khai báo hàm handleSubmit để thực thi khi người dùng bấm nút Submit trong form
async function handleSubmit(event) {
    event.preventDefault(); // Ngăn không reload lại trang

    // Lấy dữ liệu người dùng nhập vào form
    const title = document.getElementById('title').value;
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;

    // Clear all previous errors
    clearError('title');
    clearError('name');
    clearError('price');
    clearError('image');

    // Validate all fields
    let hasError = false;
    
    const titleError = validateTitle(title);
    if (titleError) {
        showError('title', titleError);
        hasError = true;
    }

    const nameError = validateName(name);
    if (nameError) {
        showError('name', nameError);
        hasError = true;
    }

    const priceError = validatePrice(price);
    if (priceError) {
        showError('price', priceError);
        hasError = true;
    }

    const imageError = validateImage(image);
    if (imageError) {
        showError('image', imageError);
        hasError = true;
    }

    if (hasError) {
        return; // Stop if there are validation errors
    }

    // Gửi dữ liệu lên json-server để lưu lại
    try {
        const data = {
            title: title.trim(),
            name: name.trim(),
            price: parseFloat(price),
            image: image.trim()
        };

        if (!id) { // Nếu không có id => chức năng thêm mới
            await axios.post("http://localhost:3000/products", data); // Truyền data lên để lưu vào json-server
            alert('Thêm mới thành công!');
        } else { // Có id => chức năng chỉnh sửa
            await axios.put(`http://localhost:3000/products/${id}`, data);
            alert('Chỉnh sửa thành công!');
        }
        
        location.href = "./index.html"; // Điều hướng người dùng về trang danh sách
    } catch (error) {
        console.error(error);
        alert("Có lỗi xảy ra khi lưu sản phẩm. Vui lòng thử lại!");
    }
}