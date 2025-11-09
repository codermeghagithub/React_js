  
  // Theme toggle function
  function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-switch');
    
    body.classList.toggle('dark-mode');
    
    // Change icon based on theme
    if (body.classList.contains('dark-mode')) {
      themeBtn.textContent = '☀️';
    } else {
      themeBtn.textContent = '🌙';
    }
  }
