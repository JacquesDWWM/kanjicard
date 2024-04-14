const menuFiches = document.querySelector('#menufiches')
const fiches = document.querySelector('#hiddenmenu')
menuFiches.addEventListener('click', () => {
    if (fiches.style.display === 'none' || fiches.style.display === '') {
        fiches.style.display = 'flex';
        fiches.style.top = '100px'
    } else {
        fiches.style.top = '-100px'
        fiches.style.display = 'none';
    }
})