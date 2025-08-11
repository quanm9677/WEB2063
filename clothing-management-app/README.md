# Ứng dụng Quản lý Quần áo

Ứng dụng web quản lý sản phẩm quần áo được xây dựng bằng JavaScript thuần, Bootstrap và JSON Server.

## Tính năng

### 1. Giao diện và Điều hướng (1 điểm)
- ✅ Giao diện đẹp sử dụng Bootstrap 5
- ✅ Điều hướng giữa các trang: Trang chủ, Danh sách sản phẩm, Thêm mới, Đăng nhập
- ✅ Responsive design cho mobile và desktop
- ✅ Icons từ Font Awesome

### 2. Chức năng hiển thị (1 điểm)
- ✅ Hiển thị danh sách sản phẩm dạng card
- ✅ Hiển thị hình ảnh, tên, số lượng, danh mục
- ✅ Badge hiển thị danh mục và số lượng
- ✅ Thông báo khi chưa có sản phẩm

### 3. Chức năng xóa (1 điểm)
- ✅ Modal xác nhận xóa
- ✅ Xóa sản phẩm từ server
- ✅ Thông báo thành công/lỗi
- ✅ Cập nhật danh sách sau khi xóa

### 4. Chức năng thêm mới (2.5 điểm)
- ✅ Form controls đầy đủ (0.5 đ)
- ✅ Validate form: tên sản phẩm, số lượng, URL hình ảnh, danh mục (0.5 đ)
- ✅ Gửi dữ liệu lên server bằng fetch API (1 đ)
- ✅ Thông báo thành công và chuyển trang danh sách (0.5 đ)

### 5. Chức năng cập nhật (2.5 điểm)
- ✅ Hiển thị dữ liệu cần cập nhật lên form (0.5 đ)
- ✅ Form controls đầy đủ (0.5 đ)
- ✅ Validate form (0.5 đ)
- ✅ Cập nhật dữ liệu lên server bằng fetch API (0.5 đ)
- ✅ Thông báo thành công và chuyển trang danh sách (0.5 đ)

## Cài đặt và Chạy

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Khởi động JSON Server
```bash
npm run dev
```
Server sẽ chạy tại: http://localhost:3000

### 3. Mở ứng dụng
Mở file `index.html` trong trình duyệt hoặc sử dụng Live Server.

## Cấu trúc dự án

```
clothing-management-app/
├── index.html          # Trang chính
├── styles.css          # CSS tùy chỉnh
├── script.js           # JavaScript chính
├── db.json             # Database JSON
├── package.json        # Dependencies
└── README.md           # Hướng dẫn
```

## Dữ liệu mẫu

### Sản phẩm
- Áo nỉ 2025 (30 cái)
- Quần nỉ 2025 (45 cái)

### Tài khoản admin
- Email: admin@gmail.com
- Password: admin123

## API Endpoints

- `GET /products` - Lấy danh sách sản phẩm
- `POST /products` - Thêm sản phẩm mới
- `PUT /products/:id` - Cập nhật sản phẩm
- `DELETE /products/:id` - Xóa sản phẩm
- `POST /login` - Đăng nhập

## Công nghệ sử dụng

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **UI Framework**: Bootstrap 5
- **Icons**: Font Awesome 6
- **Backend**: JSON Server + json-server-auth
- **HTTP Client**: Fetch API

## Tính năng bổ sung

- ✅ Form validation real-time
- ✅ Toast notifications
- ✅ Loading states
- ✅ Error handling
- ✅ Responsive design
- ✅ Smooth animations
- ✅ User authentication
- ✅ Modal confirmations 