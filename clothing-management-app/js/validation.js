// validation.js
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;

    switch (field.name) {
        case 'title':
            isValid = value.length >= 3;
            break;
        case 'quantity':
            isValid = !isNaN(value) && Number(value) >= 0;
            break;
        case 'imageUrl':
            try { new URL(value); } catch { isValid = false; }
            break;
        case 'category':
            isValid = !!value;
            break;
        // Register form validations
        case 'name':
            isValid = value.length >= 2 && /^[a-zA-ZÀ-ỹ\s]+$/.test(value);
            break;
        case 'email':
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            break;
        case 'password':
            isValid = value.length >= 6;
            break;
        case 'confirmPassword':
            const password = document.getElementById('register-password').value;
            isValid = value === password && value.length >= 6;
            break;
    }

    field.classList.toggle('is-invalid', !isValid);
    return isValid;
}

function validateForm(form) {
    let valid = true;
    form.querySelectorAll('input, select').forEach(field => {
        if (!validateField(field)) valid = false;
    });
    return valid;
}

// Register form specific validation
function validateRegisterForm(form) {
    let valid = true;
    
    // Validate name
    const nameField = form.querySelector('[name="name"]');
    if (!validateField(nameField)) valid = false;
    
    // Validate email
    const emailField = form.querySelector('[name="email"]');
    if (!validateField(emailField)) valid = false;
    
    // Validate password
    const passwordField = form.querySelector('[name="password"]');
    if (!validateField(passwordField)) valid = false;
    
    // Validate confirm password
    const confirmPasswordField = form.querySelector('[name="confirmPassword"]');
    if (!validateField(confirmPasswordField)) valid = false;
    
    return valid;
}
