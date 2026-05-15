document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelectorAll('ul li');
    list.forEach((li) => {
        li.addEventListener('click', () => {
            li.classList.toggle('active');
        })
    })
})