document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('themeToggle');
  const body = document.body;

  // Apply stored theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }

  button.addEventListener('click', () => {
    // Toggle theme
    body.classList.toggle('dark');
    
    // Save preference to localStorage
    const newTheme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);

    // Trigger animation
    button.classList.add('animate');

    // Remove animation class after animation ends
    button.addEventListener('animationend', () => {
      button.classList.remove('animate');
    }, { once: true });
  });
});
