async function getList() {
    try {
        const response = await axios.get('http://localhost:3000/products');
        const products = response.data;
        const contentHtml = products.map(renderData).join("");
        document.getElementById('list').innerHTML = contentHtml;
    } catch (error) {
        console.error(error);
    }
}

function renderData(product) {
    return `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>    
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td>
                    <img src="${product.image}" alt="${product.title}" 
                         style="width: 50px; height: 50px; object-fit: cover;" 
                         onerror="this.src='https://via.placeholder.com/50x50?text=No+Image'">
                </td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="edit(${product.id})">Edit</button>
                    <button onclick="remove(${product.id})" class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
            `
}

getList();

async function remove(id) {
    try {
        if (confirm("Bạn có muốn xóa sản phẩm này không?")) {
            await axios.delete(`http://localhost:3000/products/${id}`);
            alert("Xóa thành công!");
            getList(); // Refresh danh sách
        }
    } catch (error) {
        console.error(error);
        alert("Có lỗi xảy ra khi xóa sản phẩm!");
    }
}

function edit(id) {
    location.href = `./add.html?id=${id}`;
}