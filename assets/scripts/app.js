
// Giving the current year to the footer in real-time
const footerYear = document.querySelector('.year');
footerYear.textContent = new Date().getFullYear();



// Profile toggle on small screens
const profileClose = document.querySelector('nav .tail-tablet .profile .close button');
const profileOpen = document.querySelector('nav .tail-tablet button');
const profileMenu = profileOpen.nextElementSibling;

profileOpen.addEventListener('click', () => {
  profileMenu.style.display = 'block';
  profileOpen.style.display = 'none';
});

profileClose.addEventListener('click', () => {
  profileMenu.style.display = 'none';
  profileOpen.style.display = 'block';
});



// Dropdown menu toggle on Tablets
const dropdownToggle = document.querySelector('nav .lead li.more');
const dropdownMenu = dropdownToggle.querySelector('ul');
const dropdownIcon = document.querySelector('nav .lead svg .icon-down');
const dropupIcon = document.querySelector('nav .lead svg .icon-up');

dropdownToggle.addEventListener('click', () => {
  if (dropdownMenu.style.display === 'block') {
    dropdownMenu.style.display = 'none';
    dropdownIcon.style.display = 'none';
    dropupIcon.style.display = 'inline';    
  } else {
    dropdownMenu.style.display = 'block';
    dropdownIcon.style.display = 'inline';
    dropupIcon.style.display = 'none';
  }
});


// Nav toggle on Mobile Phones
const mobileNavOpen = document.querySelector('nav .lead-tablet');
const mobileNav = document.querySelector('nav .nav__phone--modal');
const mobileNavCont = document.querySelector('nav .nav__content');
const mobileNavClose = document.querySelector('.nav__phone--modal .close button');

mobileNavOpen.addEventListener('click', () => {
  mobileNav.style.display = 'block';
  mobileNavClose.focus();
  document.body.style.position = 'fixed';
  document.body.style.top = 0;
});

mobileNavClose.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  mobileNavOpen.focus();
  document.body.style.position = 'static';
});

window.addEventListener('click', e => {
  if (e.target === mobileNav && e.target !== mobileNavCont) {
    mobileNav.style.display = 'none';
    mobileNavOpen.focus();
    document.body.style.position = 'static';
  }
});



// Dropdown menu toggle on Phones
const phoneDropdownToggle = document.querySelector('.nav__content li.more > a');
const phoneDropdownMenu = phoneDropdownToggle.nextElementSibling;
const phoneIconUp = phoneDropdownToggle.querySelector('.nav__content li.more > a .icon-up');
const phoneIconDown = phoneDropdownToggle.querySelector('.nav__content li.more > a .icon-down');

phoneDropdownMenu.style.display = 'none';

phoneDropdownToggle.addEventListener('click', () => {
  if (phoneDropdownMenu.style.display === 'block') {
    phoneDropdownMenu.style.display = 'none';
    phoneIconUp.style.display = 'none';
    phoneIconDown.style.display = 'inline';
  } else {
    phoneDropdownMenu.style.display = 'block';
    phoneIconUp.style.display = 'inline';
    phoneIconDown.style.display = 'none';
  }
  console.log(phoneDropdownMenu);
});



// Eliminate unnecessary double active for sponsor
// const sponsorLg = document.querySelector('nav .lead > ul> li.sponsor a');
// const sponsorSm = document.querySelector('nav .lead-phone > ul> li.sponsor a');
// const curLoc = document.location.href;

// if (curLoc.indexOf('sponsor.html') != -1) {
//   sponsorLg.classList.remove('active');
//   sponsorSm.classList.remove('active');
// }