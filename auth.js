// CHANGE THIS → your admin password (encrypted)
const ADMIN_HASH = "3c2f5bbac7f63ba02d4a52fb90b68d03"; // password = "Admin@502"

// Simple MD5 implementation
function md5(str) {
    return CryptoJS.MD5(str).toString();
}

function login() {
    const pw = document.getElementById("password").value;

    if (md5(pw) === ADMIN_HASH) {
        localStorage.setItem("isAdmin", "true");
        window.location.href = "admin.html";
    } else {
        document.getElementById("msg").innerText = "Incorrect password";
    }
}

// Protect admin pages
function protectAdminPage() {
    if (localStorage.getItem("isAdmin") !== "true") {
        window.location.href = "admin-login.html";
    }
}

function logout() {
    localStorage.removeItem("isAdmin");
    window.location.href = "admin-login.html";
}
