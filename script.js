document.querySelector('.hamburger').addEventListener('click', () => {
  document.getElementById('sideMenu').classList.add('active');
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('sideMenu').classList.remove('active');
});
