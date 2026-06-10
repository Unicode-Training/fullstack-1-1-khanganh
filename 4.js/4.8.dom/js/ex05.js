const box = document.querySelector('.js-box');
const ul = box.querySelector('.js-box ul');

const highlightItem = (item) => {
    item.classList.add('active');
    setTimeout(() => {
        item.classList.remove('active');
    }, 300);
}

ul.addEventListener('click', (e) => {
    const item = e.target.closest('li');

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

    //Khi click vào item (Không tính up, down)
    if (item === e.target) {
        const itemSelected = ul.querySelector('.selected');
        item.classList.toggle('selected');
        itemSelected && itemSelected.classList.remove('selected');
    }
})

document.addEventListener('click', (e) => {
    if (!ul.contains(e.target)) {
        const itemSelected = ul.querySelector('.selected');
        itemSelected && itemSelected.classList.remove('selected');
    }
});

//Ký tự bàn phím: keyup, keydown
//Có focus
document.addEventListener('keydown', (e) => {
    const itemSelected = ul.querySelector('.selected');
    if (!e.altKey || !e.shiftKey || !itemSelected) {
        return;
    }
    if (e.key === 'ArrowDown') {
        const itemClone = itemSelected.cloneNode(true);
        itemClone.classList.remove('selected');
        ul.insertBefore(itemClone, itemSelected.nextElementSibling);
        highlightItem(itemClone);
    }
});
