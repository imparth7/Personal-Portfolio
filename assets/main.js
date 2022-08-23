// Toggle Menu
const toggleMenu = document.querySelector('#toggle-menu'),
    toggleMenuIcon = toggleMenu.querySelector('i'),
    menu = document.querySelector('#menu');

toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('translate-y-[-200%]')
    changeMenuIcon()
})

// Close Menu when Click Menu List
const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        menu.classList.add('translate-y-[-200%]')
        changeMenuIcon()
    })
})

function changeMenuIcon(){
    toggleMenuIcon.classList.toggle('fa-bars')
    toggleMenuIcon.classList.toggle('fa-xmark')
}

// Toggle Theme
const html = document.querySelector('html'),
    toggleTheme = document.querySelector('#toggle-theme'),
    toggleThemeIcon =toggleTheme.querySelector('i');

toggleTheme.addEventListener('click', () => {
    html.classList.toggle('dark')
    toggleThemeIcon.classList.toggle('fa-sun-bright')
})