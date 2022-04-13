const hamburgerMenu = document.getElementById('hamburger-icon');
const hamburgerLinks = document.getElementById('hamburger-links');

hamburgerLinks.style.display = "none";

function showHideMenu() {
    if (hamburgerLinks.style.display === 'none' || hamburgerLinks.style.display === '') {
        hamburgerLinks.style.display = 'block';

    } else {
        hamburgerLinks.style.display = 'none';
    };
}

hamburgerMenu.addEventListener('click', (e) => {
    e.preventDefault();
    showHideMenu();
})