// notifications.js
function showNotification(message, type = 'info') {
    const toast = document.getElementById('notification-toast');
    const toastMessage = document.getElementById('toast-message');
    toastMessage.textContent = message;
    toast.className = `toast align-items-center text-white bg-${type} border-0`;
    new bootstrap.Toast(toast).show();
}
