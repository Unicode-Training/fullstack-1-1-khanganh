//HTTP Client
// - xhr (XMLHTTPRequest)
// - fetch --> Tự động trả về promise
// - Thư viện: axios

// fetch(`https://jsonplaceholder.typicode.com/todos`).then(res => {
//     return res.json()
// }).then(data => {
//     console.log(data);
// });

const getTodos = async () => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: 'hello' })
        });
        if (!res.ok) {
            throw new Error('Error fetch todos');
        }
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
getTodos();

//ssr, csr

//PUT, PATCH

//GET /api/users?param1=value1&param2=value2

//DOM