const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Adjust the scroll threshold as needed
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});