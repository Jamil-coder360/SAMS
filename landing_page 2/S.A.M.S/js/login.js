// Role button active toggle
// const roleButtons = document.querySelectorAll('.role');
// roleButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         roleButtons.forEach(b => b.classList.remove('active'));
//         btn.classList.add('active');
//     });
// });

// // Example form submit action
// document.getElementById('loginForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     window.location.href = "../asset/admin.html"; // Redirect to another page
// });


// roll toggle

// role toggle logic
const roleButtons = document.querySelectorAll('.role');
const roleInput = document.getElementById('roleInput');

// Make sure there is a default active role
if (!document.querySelector('.role.active') && roleButtons.length) {
    roleButtons[0].classList.add('active');
    roleInput.value = roleButtons[0].dataset.role;
}

// click handler to toggle active role
roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // remove active from all
        roleButtons.forEach(b => b.classList.remove('active'));
        // set clicked as active
        btn.classList.add('active');

        // update hidden input (for server-side)
        roleInput.value = btn.dataset.role;
    });
});

// form submit handler
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault(); // we control the flow

    const email = document.getElementById('email').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();
    const selectedRole = document.querySelector('.role.active').dataset.role; // "admin" / "teacher" / "student"

    // ---- Demo validation (client-side only) ----
    // For production: DO NOT trust client-side validation. Send to server for real checks.
    const demoCreds = {
        admin: { email: 'admin@sams.com', pass: 'admin123' },
        teacher: { email: 'teacher@sams.com', pass: 'teach123' },
        student: { email: 'student@sams.com', pass: 'stud123' }
    };

    // Optional: if you want to allow any credentials and just redirect, skip the validation block.
    // Here we perform a simple demo check:
    const creds = demoCreds[selectedRole];
    if (creds && email === creds.email && password === creds.pass) {
        // map roles to pages
        const routeMap = {
            admin: 'admin.html',
            teacher: 'teacher.html',
            student: 'student.html'
        };

        // optional tiny UX delay
        // show loader or do animation here if you want
        setTimeout(() => {
            window.location.href = routeMap[selectedRole] || 'dashboard.html';
        }, 250);
    } else {
        // If you prefer redirect regardless of credentials, replace this with direct routeMap redirect.
        alert('Invalid email/password for selected role. (Demo only)');
    }

    // ---- If you have a backend (recommended) ----
    // Instead of client-side check, send a POST (fetch) to your login endpoint with role:
    /*
    fetch('login.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password, role: selectedRole })
    })
    .then(r => r.json())
    .then(data => {
        if (data.success) {
            window.location.href = data.redirectUrl; // server sends e.g. /admin_dashboard.php
        } else {
            alert(data.message || 'Login failed');
        }
    })
    .catch(err => {
        console.error(err);
        alert('Server error');
    });
    */
});
