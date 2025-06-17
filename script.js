document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;
  const container = document.querySelector('.container');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    container.classList.add('dark-container');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      body.classList.add('dark-mode');
      container.classList.add('dark-container');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      container.classList.remove('dark-container');
      localStorage.setItem('theme', 'light');
    }
  });
});