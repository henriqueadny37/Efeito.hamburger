const btn = document.getElementById('btn')

function toggleMenu(){
    const navs = document.getElementById('navs')
    navs.classList.toggle('active')
}
btn.addEventListener('click', toggleMenu)