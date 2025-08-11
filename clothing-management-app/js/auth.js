// auth.js
let currentUser = null;

// Check if user is logged in on page load
function checkAuthStatus() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateAuthUI();
    }
}

// Update authentication UI
function updateAuthUI() {
    const authSection = document.getElementById('auth-section');
    if (currentUser) {
        authSection.innerHTML = `
            <span class="navbar-text text-light me-3">Xin chào, ${currentUser.name}</span>
            <a class="nav-link" href="#" id="nav-logout">
                <i class="fas fa-sign-out-alt me-1"></i>Đăng xuất
            </a>
        `;
        document.getElementById('nav-logout').addEventListener('click', handleLogout);
    } else {
        authSection.innerHTML = `
            <a class="nav-link" href="#" id="nav-login">
                <i class="fas fa-sign-in-alt me-1"></i>Đăng nhập
            </a>
        `;
        document.getElementById('nav-login').addEventListener('click', (e) => {
            e.preventDefault();
            showPage('login-page');
            updateActiveNav('nav-login');
        });
    }
    

}

// Handle login
async function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
        // Get users from API
        const users = await apiGet('users');
        const user = users.find(u => u.email === email);
        
        if (user && user.password === password) {
            currentUser = {
                id: user.id,
                name: user.name,
                email: user.email
            };
            
            // Save to localStorage
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            showNotification('Đăng nhập thành công!', 'success');
            updateAuthUI();
            showPage('products-page');
            updateActiveNav('nav-products');
        } else {
            showNotification('Email hoặc mật khẩu không đúng!', 'error');
        }
    } catch (error) {
        showNotification('Lỗi đăng nhập: ' + error.message, 'error');
    }
}

// Handle register
async function handleRegister(e) {
    e.preventDefault();
    const form = e.target;
    
    if (!validateRegisterForm(form)) {
        showNotification('Vui lòng kiểm tra lại thông tin', 'error');
        return;
    }
    
    const formData = new FormData(form);
    const userData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    };

    try {
        // Check if email already exists
        const users = await apiGet('users');
        const existingUser = users.find(u => u.email === userData.email);
        
        if (existingUser) {
            showNotification('Email đã tồn tại!', 'error');
            return;
        }
        
        // Create new user
        const newUser = await apiPost('users', userData);
        
        showNotification('Đăng ký thành công! Vui lòng đăng nhập.', 'success');
        
        // Switch to login page
        showPage('login-page');
        updateActiveNav('nav-login');
        
        // Clear register form
        form.reset();
        form.querySelectorAll('.form-control').forEach(field => {
            field.classList.remove('is-invalid', 'is-valid');
        });
        
    } catch (error) {
        showNotification('Lỗi đăng ký: ' + error.message, 'error');
    }
}

// Handle logout
function handleLogout(e) {
    e.preventDefault();
    
    // Clear current user
    currentUser = null;
    localStorage.removeItem('currentUser');
    
    showNotification('Đăng xuất thành công!', 'success');
    updateAuthUI();
    showPage('home-page');
    updateActiveNav('nav-home');
}

// Switch between login and register pages
function setupAuthSwitching() {
    // Switch to register
    document.getElementById('switch-to-register').addEventListener('click', (e) => {
        e.preventDefault();
        showPage('register-page');
        updateActiveNav('nav-login');
    });
    
    // Switch to login
    document.getElementById('switch-to-login').addEventListener('click', (e) => {
        e.preventDefault();
        showPage('login-page');
        updateActiveNav('nav-login');
    });
}

// Check if user is authenticated
function isAuthenticated() {
    return currentUser !== null;
}

// Get current user
function getCurrentUser() {
    return currentUser;
} 