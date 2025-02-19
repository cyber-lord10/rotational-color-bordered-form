
// Giving the current year to the footer in real-time
const footerYear = document.querySelector('.year');
footerYear.textContent = new Date().getFullYear();

// Navbar toggle
const profileTrigger = document.querySelector('nav .tail-tablet button');
const profileMenu = profileTrigger.nextElementSibling;

console.log(profileMenu);

profileTrigger.addEventListener('click', () => {
  profileMenu.style.display = 'block';
  profileTrigger.style.display = 'none';

  console.log(profileMenu);
});

document.body.addEventListener('click', (e) => {
  if (e.target == profileTrigger) {
    profileMenu.style.display = 'none';
    profileMenu.style.width.value = '0';
    profileTrigger.style.display = 'block';
  }
});