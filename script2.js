const modal = document.querySelector('.modal');
const close = document.querySelector('.close')
const btn = document.querySelector('.btn')


btn.addEventListener('click', (e) => {
    e.preventDefault()
    modal.style.display = "block"
})

close.addEventListener('click', () => {
    modal.style.display = "none"
})

modal.addEventListener('click', () => {
    modal.style.display = "none"
})

