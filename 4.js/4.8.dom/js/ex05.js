const box = document.querySelector('.js-box');
const ul = box.querySelector('.js-box ul');
const highlightItem = (item) => {
    item.classList.add('active');
    setTimeout(() => {
        item.classList.remove('active');
    }, 300);
}
ul.addEventListener('click', (e) => {
    const item = e.target.parentElement;
    if (e.target.classList.contains('js-down')) {
        //down;
        if (!item.nextElementSibling) {
            return;
        }
        ul.insertBefore(item.nextElementSibling, item);
        highlightItem(item);
    }
    if (e.target.classList.contains('js-up')) {
        if (!item.previousElementSibling) {
            return;
        }
        ul.insertBefore(item, item.previousElementSibling);
        highlightItem(item);
    }
})