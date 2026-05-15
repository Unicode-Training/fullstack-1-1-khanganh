//DOM = Document Object Model
//Đối tượng do trình duyệt xây dựng giúp mô hình hóa tài liệu html được trả về từ server
//Tác dụng: 
// - Thay đổi giao diện trang web (Thay đổi html) bằng JavaScript
// - Lắng nghe các hành động từ phía người dùng lên các phần tử html (event)
// - Tạo ra các thẻ html mới --> Thêm vào DOM (Thêm cây DOM)

//Các loại node:
// - Element node --> Object mô tả 1 thẻ html (thuộc tính, nội dung)
// - attrbiute node --> Object mô tả thuộc tính của thẻ html
// - text node --> object dùng để mô tả nội dung text trên trang web
// - comment node --> object dùng để mô tả comment html

// console.dir(document);
// document.body.childNodes[0].data = 'Chào em';

//Cách truy cập vào element node
//1. getElementById(id): Truy cập vào phần đầu tiên thông qua id
// const titleEl = document.getElementById('title');
// console.log({ titleEl });

//2. getElementsByClassName(class): Truy cập vào tất cả phần tử thông qua class --> Trả về 1 danh sách
// const subTitleList = document.getElementsByClassName('sub-title');
// Array.from(subTitleList).forEach(el => {
//     console.log(el);
// })

//3. getElementsByTagName(tag): Truy cập vào tất cả phần tử thông qua tagname
// const subTitleList = document.getElementsByTagName('h2');
// console.log(subTitleList);

//4. querySelector(css-selector): Truy cập vào phần tử đầu tiên thông qua css selector
// const subTitle = document.querySelector('.sub-title');
// console.log(subTitle);

//5. querySelectorAll(css-selector): Truy cập vào tất cả phần tử thông qua css selector
// const titleList = document.querySelectorAll('.sub-title');

// titleList.forEach((el) => {
//     console.log(el);
// })

//Event: Mỗi thẻ html sẽ có những event riêng
//- element.addEventListener(ten-event, callback)
//- Danh sách event hay dùng
// + click
// + dbclick
// + mousedown
// + mouseup
// + mousemover
// + mouseover
// + mouseout
// + keyup
// + keydown
// + keypress
// + input
// + submit
// + change
// + focus
// + blur
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//     console.log('ok 1');
// });
// btn.addEventListener('click', () => {
//     console.log('ok 2');
// });
// btn.addEventListener('dblclick', () => {
//     console.log('double click');
// });

// const input = document.querySelector('input');
// input.addEventListener('keyup', (e) => {
//     //e = event object: Mô tả thông tin sự kiện
//     if (e.key === 'Enter') {
//         console.log(input.value);
//     }
// })

// input.addEventListener('change', () => {
//     console.log('Đã thay đổi');
// })

// input.addEventListener('focus', () => {
//     console.log('focus');
// })
// input.addEventListener('blur', () => {
//     console.log('blur');
// })

// let count = 0;
// const handler = () => {
//     count++;
//     console.log(count);
//     if (count === 5) {
//         btn.removeEventListener('click', handler);
//     }
// }
// btn.addEventListener('click', handler);

//event object
// - preventDefault(): Ngăn các hành động mặc định của thẻ html
// - stopPropagation(): Ngăn nổi bọt event của thẻ html con
// - target: Trả về element mục tiêu khi tác động sự kiện
// - clientX, clientY
// - offsetX, offsetY
// const aEl = document.querySelector('a');
// aEl.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(aEl.href);
// })

// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// })

// const box = document.querySelector('.box');
// const btn = document.querySelector('button');
// box.addEventListener('click', () => {
//     console.log('box');
// })
// btn.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('button');

// });

// const btn = document.querySelector('button');
// btn.addEventListener('click', function (e) {
//     console.log(this);

//     console.log(e.target);
// })

// const input = document.querySelector('input');
// input.addEventListener('input', (e) => {
//     console.log(e.target.value);

// })

// const list = document.querySelectorAll('ul li');
// const ul = document.querySelector('ul');
// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     ul.innerHTML += `<li>New item</li>`;

//     const list = document.querySelectorAll('ul li');
//     list.forEach((item) => {
//         item.addEventListener('click', () => {
//             item.style.color = 'red';
//         })
//     })
// });
// list.forEach((item) => {
//     item.addEventListener('click', () => {
//         item.style.color = 'red';
//     })
// })

// const ul = document.querySelector('ul');
// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     ul.innerHTML += `<li>New item</li>`
// });
// ul.addEventListener('click', (e) => {
//     if (e.target.localName === 'li') {
//         e.target.style.color = 'red';
//     }
// })

// const boxEl = document.querySelector('.box');
// console.log(boxEl.innerHTML);
// boxEl.innerHTML = `<i>Hello</i>`
// console.log(boxEl.innerText);
// boxEl.innerText = `<i>Hello</i>`

// console.log(boxEl.outerHTML);
// boxEl.outerHTML = `<i>Hello</i>`

//Thuộc tính
const input = document.querySelector('input');
// console.log(input.value);
// console.log(input.type);
// console.log(input.placeholder);
// console.log(input.name);

// input.value = 'Ahihi'

// console.log(input.getAttribute('data-id'));
// input.setAttribute('data-id', 2)

// console.log(input.dataset);
// console.log(input.dataset.id);
// console.log(input.dataset.animationName);

// input.dataset.animationName = '111';
// input.dataset.animationTimingFunction = 'linear'

// console.log(input.className);

//classList
// console.log(input.classList);

// input.classList.add('a11', 'a22')
// input.classList.remove('input-primary')
// input.classList.replace('input-large', 'input-small');
// console.log(input.classList.contains('a11'));
// input.classList.toggle('active');
// input.classList.toggle('active');

//DOM CSS (Inline css)
// const boxEl = document.querySelector('.box');
// console.log(boxEl.style);
// boxEl.style.color = 'red';
// boxEl.style.backgroundColor = 'yellow'

// boxEl.style.color = null;