// //Macrotask queue
// setTimeout(() => {
//   console.log(2);
// }, 0);
// Promise.resolve(3).then((data) => {
//   console.log(data);
// }); //Microtask queue
// console.log(1);

//Xử lý bất đồng bộ là gì?
// Áp dụng các kỹ thuật để cho các tác vụ chạy lần lượt (Có sự chờ đợi)
//Ví dụ: Button -> Click -> Gọi API -> Chờ api phản hồi -> Hiển thị dữ liệu

//1. Callback
//2. Promise
//3. Async await

// const callAPI = (url, onSuccess) => {
//   if (typeof onSuccess !== "function") {
//     return;
//   }
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url, true);
//   xhr.send();
//   xhr.onload = function () {
//     const data = JSON.parse(this.responseText);
//     onSuccess(data);
//   };
// };

// callAPI("https://jsonplaceholder.typicode.com/posts/1", (post) => {
//   console.log(post);
//   callAPI("https://jsonplaceholder.typicode.com/users/1", (user) => {
//     console.log(user);
//     callAPI("https://jsonplaceholder.typicode.com/todos/1", (todo) => {
//       console.log(todo);
//     });
//   });
// });

//Promise: Object có js xây dựng sẵn nhằm mục đích chứa dữ liệu sẽ có trong tương lai
//Promise state:
// - pending --> Trạng thái lúc khởi tạo object promise
// - fulfilled --> Khi dữ liệu tương lai xử lý thành công
// - rejected --> Khi dữ liệu tương lai xử lý thất bại
//Chaining: a().b().c()

//1. Tạo object promise

// const myPromise = new Promise((resolve, reject) => {
//   //resolve: Hàm nhận dữ liệu từ tác vụ bất đồng bộ nếu thành công
//   //reject: Hàm nhận lỗi từ tác vụ bất đồng bộ nếu thất bại
//   setTimeout(() => {
//     let status = true;
//     const data = "Hello anh em";
//     if (status) {
//       resolve(data);
//     } else {
//       reject("Đã có lỗi khi lấy dữ liệu");
//     }
//   }, 2000);
// });

// const myPromise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Chào anh em");
//   }, 1000);
// });

//2. Gọi object promise để lấy dữ liệu trong promise
// myPromise
//   .then((data) => {
//     console.log(data);
//     return myPromise2;
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const callAPI = (url) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.send();
//     xhr.onload = function () {
//       const data = JSON.parse(this.responseText);
//       resolve(data);
//     };
//     xhr.onerror = function () {
//       reject(`Đã có lỗi khi lấy api ${url}`);
//     };
//   });
// };

// callAPI(`https://jsonplaceholder.typicode.com/posts/1`)
//   .then((data) => {
//     console.log(data);
//     return callAPI(`https://jsonplaceholder.typicode.com/users/1`);
//   })
//   .then((data) => {
//     console.log(data);
//     return callAPI(`https://jsonplaceholder.typicode.com/todos/1`);
//   })
//   .then((data) => {
//     console.log(data);
//   });

//user -> create order -> save db + mail (job queue)

//Promise.all(): 
const getUser = (userId) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "User 1",
          salary: 1000
        },
        {
          id: 2,
          name: "User 2",
          salary: 2000
        },
        {
          id: 3,
          name: "User 3",
          salary: 3000
        }
      ];
      resolve(users.find(user => user.id === userId));
    }, Math.random() * 2000);
  })
}

const ids = [1, 2, 3];
// const salaryPromise = new Promise((resolve) => {
//   let total = 0;
//   let count = 0;
//   for (let i = 0; i < ids.length; i++) {
//     getUser(ids[i]).then(data => {
//       total += data.salary;
//       if (count === ids.length - 1) {
//         resolve(total);
//       }
//       count++;
//     })
//   }
// })
// salaryPromise.then(data => {
//   console.log(data);
// })

// const promiseArray = ids.map((id) => getUser(id));
// const salaryPromise = Promise.all(promiseArray).then(data => {
//   const total = data.reduce((acc, cur) => acc + cur.salary, 0);
//   return total;
// })

// //Nơi khác cần sử dụng
// salaryPromise.then(data => {
//   console.log(data);
// })

