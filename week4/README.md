# CRUD Product Management System

## Mô tả dự án
Hệ thống quản lý sản phẩm với đầy đủ chức năng CRUD (Create, Read, Update, Delete) được xây dựng bằng JavaScript thuần và Bootstrap.

## Tính năng
- ✅ **Thêm sản phẩm mới** với validation đầy đủ
- ✅ **Hiển thị danh sách sản phẩm** với giao diện đẹp
- ✅ **Chỉnh sửa sản phẩm** với form pre-filled
- ✅ **Xóa sản phẩm** với xác nhận
- ✅ **Validation đầy đủ** bằng JavaScript thuần
- ✅ **Preview ảnh** real-time
- ✅ **Responsive design** với Bootstrap 5

## Cấu trúc dữ liệu
Mỗi sản phẩm có các trường:
- `id`: ID duy nhất
- `title`: Tiêu đề sản phẩm (2-100 ký tự)
- `name`: Tên sản phẩm (2-200 ký tự)
- `price`: Giá sản phẩm (số dương)
- `image`: URL ảnh sản phẩm

## Cài đặt và chạy

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Khởi động json-server
```bash
npm run server
```

### 3. Mở ứng dụng
Mở file `index.html` trong trình duyệt hoặc sử dụng Live Server.

## API Endpoints
- `GET /products` - Lấy danh sách sản phẩm
- `GET /products/:id` - Lấy chi tiết sản phẩm
- `POST /products` - Thêm sản phẩm mới
- `PUT /products/:id` - Cập nhật sản phẩm
- `DELETE /products/:id` - Xóa sản phẩm

## Validation Rules
- **Title**: Bắt buộc, 2-100 ký tự
- **Name**: Bắt buộc, 2-200 ký tự  
- **Price**: Bắt buộc, số dương
- **Image**: Bắt buộc, URL hợp lệ

## Công nghệ sử dụng
- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (ES6+)
- Axios (HTTP client)
- JSON Server (Mock API)

## Tác giả
WEB2063 - JavaScript Nâng Cao 