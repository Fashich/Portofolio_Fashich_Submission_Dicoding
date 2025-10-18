document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');

  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode';
  }

  darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      darkModeToggle.textContent = 'Light Mode';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      darkModeToggle.textContent = 'Dark Mode';
    }
  });
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  const projectItems = document.querySelectorAll('.project-item, .certificate-item, .gallery-item');
  projectItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.zIndex = "10";
    });

    item.addEventListener('mouseleave', function() {
      this.style.zIndex = "1";
    });
  });
});