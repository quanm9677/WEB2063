# Product Management System

Hệ thống quản lý sản phẩm với các chức năng CRUD (Create, Read, Update, Delete).

## Các chức năng chính

### 1. Xem danh sách sản phẩm (index.html)
- Hiển thị tất cả sản phẩm trong bảng
- Mỗi sản phẩm có các thông tin: ID, Title, Name, Price, Image
- Có 2 nút action: Edit và Delete

### 2. Thêm sản phẩm mới (add.html)
- Form nhập thông tin sản phẩm mới
- Validation đầy đủ cho tất cả các trường
- Preview hình ảnh real-time
- Lưu vào database

### 3. Chỉnh sửa sản phẩm (add.html)
- **Cách sử dụng**: Click nút "Edit" trên danh sách sản phẩm
- **URL**: `add.html?id=<product_id>`
- Tự động load thông tin sản phẩm vào form
- Cập nhật UI để hiển thị "Edit Product" thay vì "Add Product"
- Validation và preview hình ảnh như chức năng thêm mới
- Lưu thay đổi vào database

### 4. Xóa sản phẩm
- Click nút "Delete" trên danh sách
- Xác nhận trước khi xóa
- Tự động refresh danh sách sau khi xóa

## Cách sử dụng chức năng Edit

1. Mở trang danh sách sản phẩm (`index.html`)
2. Tìm sản phẩm cần chỉnh sửa
3. Click nút **"Edit"** màu xanh
4. Trang sẽ chuyển đến form chỉnh sửa với thông tin sản phẩm đã được điền sẵn
5. Thay đổi thông tin cần thiết
6. Click **"Update Product"** để lưu thay đổi
7. Hệ thống sẽ chuyển về trang danh sách với thông báo thành công

## Validation

Tất cả các trường đều có validation:
- **Title**: 2-100 ký tự
- **Name**: 2-200 ký tự  
- **Price**: Số dương
- **Image URL**: URL hợp lệ

## Công nghệ sử dụng

- HTML5, CSS3, JavaScript (ES6+)
- Bootstrap 5 cho UI
- Axios cho HTTP requests
- JSON Server làm backend

## Khởi chạy

1. Cài đặt dependencies: `npm install`
2. Khởi động JSON Server: `json-server --watch db.json`
3. Mở `index.html` trong trình duyệt

## Cấu trúc file

```
week4/
├── index.html      # Trang danh sách sản phẩm
├── index.js        # Logic cho trang danh sách
├── add.html        # Form thêm/chỉnh sửa sản phẩm
├── add.js          # Logic cho form thêm/chỉnh sửa
├── db.json         # Database JSON
├── login.html      # Trang đăng nhập
├── register.html   # Trang đăng ký
└── README.md       # Hướng dẫn sử dụng
``` 