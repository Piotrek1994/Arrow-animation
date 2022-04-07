const arrowBtn = document.querySelector('.arrow')
const arrowIcon = document.querySelector('.fas')
const img = document.querySelector('.item1')

const addHide = () => {
    img.classList.toggle('hide')
    arrowIcon.classList.toggle('turn')
}

arrowBtn.addEventListener('click', addHide)

