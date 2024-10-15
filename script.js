const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;
    const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Process form submission (e.g., send to a server)
    alert('Form submitted successfully!');
});
