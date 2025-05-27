// your code goes here// 1. Hero Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
setInterval(nextSlide, 5000); // Auto-slide every 5 sec
showSlide(currentSlide);

// 2. Hamburger Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// 3. Popup Logic
window.addEventListener('load', () => {
  const popup = document.querySelector('.popup');
  setTimeout(() => {
    popup.style.display = 'flex';
  }, 1000);
});
document.querySelector('.popup .close-btn').addEventListener('click', () => {
  document.querySelector('.popup').style.display = 'none';
});
document.querySelector('.popup .clickable').addEventListener('click', () => {
  document.getElementById('visitFormModal').style.display = 'flex';
});

// 4. Modal Logic for "Book Your Visit"
document.querySelector('.book-btn').addEventListener('click', () => {
  document.getElementById('visitFormModal').style.display = 'flex';
});
document.querySelector('.close-modal').addEventListener('click', () => {
  document.getElementById('visitFormModal').style.display = 'none';
});
window.addEventListener('click', (e) => {
  const modal = document.getElementById('visitFormModal');
  if (e.target === modal) modal.style.display = 'none';
});

// 5. Show thank you message after form submission
const form = document.getElementById('visitForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Normally here you'd use Formspree or your backend
  alert('Thank you! Your visit is booked.');
  form.reset();
  document.getElementById('visitFormModal').style.display = 'none';
});

// 6. WhatsApp Chat Link (already set as href in HTML)
