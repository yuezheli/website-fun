// 1. Select the button
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// 2. Add an event listener for a 'click'
toggleButton.addEventListener('click', () => {
    
    // 3. Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // 4. Change the icon based on the mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️'; // Sun icon for dark mode
    } else {
        toggleButton.textContent = '🌙'; // Moon icon for light mode
    }
});
