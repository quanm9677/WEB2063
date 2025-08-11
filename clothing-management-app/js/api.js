// api.js
const API_URL = 'http://localhost:3000';

async function apiGet(endpoint) {
    const res = await fetch(`${API_URL}/${endpoint}`);
    if (!res.ok) throw new Error('API GET failed');
    return res.json();
}

async function apiPost(endpoint, data) {
    const res = await fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('API POST failed');
    return res.json();
}

async function apiPut(endpoint, data) {
    const res = await fetch(`${API_URL}/${endpoint}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('API PUT failed');
    return res.json();
}

async function apiDelete(endpoint) {
    const res = await fetch(`${API_URL}/${endpoint}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('API DELETE failed');
    return res.json();
}
