// Theme Switcher
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Form Validation
const signupForm = document.getElementById('signupForm');
const formMessage = document.getElementById('formMessage');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (name === "" || email === "" || password === "") {
        formMessage.textContent = "All fields are required!";
        formMessage.style.color = "red";
    } else if (password.length < 6) {
        formMessage.textContent = "Password must be at least 6 characters.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = `Welcome, ${name}! Form submitted successfully.`;
        formMessage.style.color = "green";
        signupForm.reset();
    }
});

// Image Change on Click
const interactiveImage = document.getElementById('interactiveImage');
interactiveImage.addEventListener('click', () => {
    interactiveImage.src = interactiveImage.src.includes('image1.jpg') ? 'image2.jpg' : 'image1.jpg';
});
