const search = document.querySelector('.serach')
const  btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    serach.classList.toggle('active')
    input.focus()
})