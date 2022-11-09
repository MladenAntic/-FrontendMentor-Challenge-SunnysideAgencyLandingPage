const toggleMenu = document.querySelector('.toggle-menu')
const mobileNavigation = document.querySelector('.mobile-navigation-links')

const newToggleMenu = document.createElement('div')
newToggleMenu.innerHTML = `<img src="images/icon-hamburger.svg" class="toggle-menu" alt="Toggle Menu Icon">`

toggleMenu.addEventListener('click', () => {
    mobileNavigation.style.display = 'flex'
    toggleMenu.replaceWith(newToggleMenu)

    newToggleMenu.addEventListener('click', () => {
        mobileNavigation.style.display = 'none'
        newToggleMenu.replaceWith(toggleMenu)
    })
})

function displayMobileMenu() {
    if (window.innerWidth >= 800) {
        mobileNavigation.style.display = 'none'
    } else if (window.innerWidth < 800) {
        newToggleMenu.replaceWith(toggleMenu)
    }
}

window.addEventListener('resize', displayMobileMenu)