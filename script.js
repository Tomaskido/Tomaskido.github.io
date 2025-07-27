// 1. Find the button and the body element in the HTML
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 2. Add a 'click' event listener to the button
themeToggle.addEventListener('click', function() {
    // 3. When the button is clicked, toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');
});