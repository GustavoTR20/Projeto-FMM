document.querySelector('.hamburger').addEventListener('click', () => {
  document.getElementById('sideMenu').classList.add('active');
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('sideMenu').classList.remove('active');
});

const track = document.getElementById('carouselTrack');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

btnNext.addEventListener('click', () => {
  track.scrollBy({ left: 320, behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
  track.scrollBy({ left: -320, behavior: 'smooth' });
});

