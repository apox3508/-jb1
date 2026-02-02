const generatorBtn = document.getElementById('generator-btn');
const numbersContainer = document.getElementById('numbers-container');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Theme toggle functionality
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Load saved theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    }
});


generatorBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    numbersContainer.textContent = Array.from(numbers).join(', ');
});