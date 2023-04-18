// Get the menu button and the menu element
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// Set initial state of menu
let menuOpen = false;

// Add click event listener to menu button
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    // If menu is closed, open it
    menuBtn.classList.add('open');
    menu.classList.add('open');
    menuOpen = true;
  } else {
    // If menu is open, close it
    menuBtn.classList.remove('open');
    menu.classList.remove('open');
    menuOpen = false;
  }
});
