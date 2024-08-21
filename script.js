// Function to load HTML content
function loadHTML(file, elementId, callback) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (callback) callback();  // Execute callback if provided
        })
        .catch(error => {
            console.error('Error loading the HTML:', error);
        });
}

// Function to initialize menu toggle
function initializeMenuToggle() {
    const menuToggle = document.querySelector('#menu-toggle');
    const mobileMenu = document.querySelector('#mobile-menu');
    const menuIcon = document.querySelector('#menu-icon');
    
    if (menuToggle && mobileMenu && menuIcon) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon between hamburger and close
            menuIcon.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✖';
        });
    }
}

// Load header and footer
loadHTML('Header.html', 'header', initializeMenuToggle);
loadHTML('Footer.html', 'footer');
