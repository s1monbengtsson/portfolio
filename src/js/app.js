
const menuBtn = document.querySelector('#menu-btn')
const menu = document.querySelector('.menu')
const menuOpen = document.querySelector('.menu-display')
const toggler = document.querySelector('.slider')
const body = document.querySelector('#body')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-display')
})

document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', () => {
    menu.classList.toggle('menu-display')
}))

// toggle between dark and light mode
toggler.addEventListener('click', (e) => {
    body.classList.toggle('light-theme')
    console.log("toggling")
})
