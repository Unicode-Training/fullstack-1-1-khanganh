//DOM Nodes
const root = document.querySelector('#root');
// root.innerHTML = `
// <h2>Học js không khó</h2>
// <p>Hello anh em</p>
// <button>Click me</button>
// `

// const btn = document.querySelector('button');
// const h2 = document.querySelector('h2');
// btn.addEventListener('click', () => {
//     h2.innerText = 'Hello anh em';
// })

const form = document.createElement('form');
const input = document.createElement('input');
input.placeholder = 'Title';
input.name = 'title';
const button = document.createElement('button');
button.innerText = 'Add';
form.append(input);
form.append(button);

root.append(form);

const getPosts = async () => {
    const response = await fetch(`https://dummyjson.com/products`);
    const { products } = await response.json();
    renderPosts(products);
}

const renderPosts = (products) => {
    products.forEach((product) => {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerText = product.title;
        const p = document.createElement('p');
        p.innerText = `Giá: ${product.price}`
        const button = document.createElement('button');
        button.innerText = 'Detail';
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Xóa';
        const disableButton = document.createElement('button');
        disableButton.innerText = 'Disable';
        const pDesc = document.createElement('p');
        const span = document.createElement('span');
        span.innerText = 'Đã vô hiệu hóa';
        div.append(h2);
        div.append(p);
        div.append(button);
        div.append(deleteButton);
        div.append(disableButton);
        div.append(pDesc);
        root.append(div);
        button.addEventListener('click', () => handleShow(product.id, pDesc, button))
        deleteButton.addEventListener('click', () => deleteProduct(product.id, div));
        disableButton.addEventListener('click', () => disableProduct(div, button, span))
    })
}

getPosts();

const handleShow = async (id, element, button) => {
    try {
        button.innerText = 'Loading...';
        button.disabled = true;
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const { description } = await response.json();
        element.innerText = description;
    } catch {
        alert('Đã có lỗi xảy ra')
    }
    finally {
        button.innerText = 'Detail';
        button.disabled = false;
    }
}

const disableProduct = (div, button, span) => {
    div.replaceChild(span, button);
}

const deleteProduct = async (id, element) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE'
    });
    // element.remove();
    root.removeChild(element); //Xóa node element nằm trong node root
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = input.value;

    const response = await fetch(`https://dummyjson.com/products/add`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, price: 10 })
    });
    const product = await response.json();
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = product.title;
    const p = document.createElement('p');
    p.innerText = `Giá: ${product.price}`
    div.append(h2);
    div.append(p);
    root.insertBefore(div, form.nextElementSibling);
    // root.append(div);
    // root.prepend(div);
})

//Add event
// const addEvent = () => {
//     root.addEventListener('click', (e) => {
//         if (e.target.classList.contains('detail-btn')) {
//             const id = e.target.dataset.id;
//             console.log(id);
//         }
//     })
//     root.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         if (e.target.nodeName === 'FORM') {
//             const formData = new FormData(e.target);
//             const title = formData.get('title');
//             const response = await fetch(`https://dummyjson.com/products/add`, {
//                 method: 'POST',
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ title, price: 10 })
//             });
//             const product = await response.json();
//             const productListEl = root.querySelector('.product-list');
//             productListEl.innerHTML = `<div>
//         <h2>${product.title}</h2>
//         <p>Giá: ${product.price}</p>
//         <button class="detail-btn" data-id="${product.id}">Detail</button>
//         </div>` + productListEl.innerHTML

//         }
//     })
// }
// addEvent();

//*css*/`

//DOM ảo --> DOM thật (Browser DOM)
//JSX --> JS Compiler (Babel) --> React Element --> Thư viện React DOM --> Tạo DOM Nodes --> Browser