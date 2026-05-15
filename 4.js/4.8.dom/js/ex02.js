document.addEventListener('DOMContentLoaded', () => {
    // const list = document.querySelectorAll('ul li');
    // list.forEach((li) => {
    //     li.addEventListener('click', () => {
    //         const itemActive = document.querySelector('.active');
    //         li.classList.toggle('active');
    //         if (itemActive) {
    //             itemActive.classList.remove('active');
    //         }
    //     })
    // })

    //Thiết kế event mô phỏng hành vi kéo
    const btn = document.querySelector('button');
    const dropEl = document.querySelector('.drop');
    let offsetX = 0;
    let offsetY = 0;
    let prevClientX = 0;
    let prevClientY = 0;

    btn.addEventListener('mousedown', (e) => {
        document.addEventListener('mousemove', handleDrag);
        offsetX = e.offsetX;
        offsetY = e.offsetY;
        prevClientX = e.clientX;
        prevClientY = e.clientY;
    });
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', handleDrag);
    })
    const handleDrag = (e) => {
        const clientX = e.clientX;
        const clientY = e.clientY;

        const css = {
            left: `${clientX - offsetX}px`,
            top: `${clientY - offsetY}px`
        }
        Object.assign(btn.style, css);

        if (clientX - prevClientX >= 20 || clientY - prevClientY >= 20) {
            dropEl.classList.add('active');
            // console.log(dropEl.offsetLeft, dropEl.offsetTop);
            if (clientX >= dropEl.offsetLeft && clientY >= dropEl.offsetTop) {
                //Dùng css
                // const css = {
                //     top: null,
                //     left: null,
                //     bottom: 0,
                //     right: 0
                // }
                // Object.assign(btn.style, css)
            }
        }
    }
})

//274, 76