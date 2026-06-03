//DOM Navigation: Chọn phần tử cha, con, anh em của 1 phần có trước
// - Phần tử cha: parentElement
// - Phần tử con: children --> Trả về 1 danh sách
// - Phần tử phía sau: nextElementSibling
// - Phần tử phía trước: previousElementSibling

// const buttonList = document.querySelectorAll('button');
// buttonList.forEach((button) => {
//     button.addEventListener('click', () => {
//         console.log(button.parentElement.parentElement);
//         // button.parentElement.style.borderColor = 'blueviolet';
//     })
// })

// const menu = document.querySelector('.menu');
// Array.from(menu.children).forEach((item) => {
//     console.log(item.innerText);
// })

// const nextBtn = document.querySelector('.next-btn');
// const prevBtn = document.querySelector('.prev-btn');

// nextBtn.addEventListener('click', () => {
//     const activeItem = document.querySelector('.active');
//     const nextItem = activeItem.nextElementSibling;
//     if (nextItem) {
//         nextItem.classList.add('active');
//         activeItem.classList.remove('active');
//     } else {
//         const firstItem = activeItem.parentElement.firstElementChild;
//         firstItem.classList.add('active');
//         activeItem.classList.remove('active');
//     }

// });
// prevBtn.addEventListener('click', () => {
//     const activeItem = document.querySelector('.active');
//     const prevItem = activeItem.previousElementSibling;
//     if (prevItem) {
//         prevItem.classList.add('active');
//         activeItem.classList.remove('active');
//     } else {
//         const lastItem = activeItem.parentElement.lastElementChild;
//         lastItem.classList.add('active');
//         activeItem.classList.remove('active');
//     }
// });