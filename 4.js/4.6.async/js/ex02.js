//async function
// - Mặc định bọc 1 promise
//await keyword
// - Resolve giá trị trong promise (đọc giá trị trong promise, tương tự then)
// - Bắt buộc phải nằm trong async function (Trừ môi trường nodejs)
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("My data");
//         // reject('My error');
//     }, 2000);
// })
// const myPromise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("My data 2");
//     }, 1400);
// })
// const doSomething = async () => {
//     console.log('doSomething');
//     const data1 = await myPromise;
//     console.log(data1);
// }
// const doSomething2 = () => {
//     console.log('doSomething2');
// }
// doSomething(); //Gọi --> log doSomething --> Gặp await --> đẩy doSomething vào microtask
// doSomething2(); //Gọi ngay sau đó

//Khi nào myPromise thực thi xong --> quay lại doSomething

//Tóm tắt quá trình hoạt động của async await

// const getData1 = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('data 1')
//         reject('get data 1 error')
//     }, 5000);
// })

// const getData2 = () => new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('data 2')
//     }, 1500);
// })

// const showData = async () => {

//     // const data1 = await getData1();
//     // const data2 = await getData2();
//     // console.log(data1);
//     // console.log(data2);
//     const start = Date.now();
//     const [data1, data2] = await Promise.allSettled([getData1(), getData2()]);
//     console.log(data1);
//     console.log(data2);
//     const end = Date.now();
//     console.log(`Thời gian thực thi`, (end - start) / 1000);

// }
// showData();


//Promise unwrap
// const myPromise = Promise.resolve(Promise.resolve(Promise.resolve('Hello anh')));
// myPromise.then(data => {
//     console.log(data);
// })

// const myPromise = Promise.resolve({ data: Promise.resolve('Hello anh') });
// myPromise.then(data => {
//     return data.data;
// }).then(data => {
//     console.log(data);

// })

// const doSomething = async () => {
//     const dataPromise = await myPromise;
//     const data = await dataPromise.data;
//     console.log(data);
// }

// doSomething();

// const myPromise = Promise.resolve('Hello anh');
// const myPromise = new Promise((resolve, reject) => {
//     reject('My Error');
// })
// const doSomething = async () => {
//     // return myPromise;
//     try {
//         return await myPromise
//     } catch {
//         // return 'Lỗi custom';
//         throw "Lỗi custom"
//     }
// }

//TH1: return promise
//doSomething --> Promise async --> myPromise
//doSomething --> then --> thông vào data myPromise

//TH2: return await promise
//doSomething --> Promise async --> Data của myPromise
//doSomething --> then --> truy cập vào Promise async

// doSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

//controller -> service -> respository -> model -> db

//Tổng kết
// 1. Promise
// - callback của then (kết quả) sẽ được đẩy vào microtask queue để chờ
// - Dùng Promise.all(): Callback của then sẽ được đẩy vào microtask queue sau khi tất cả các promise được thực thi hết
// 2. Async await
// - Khi gặp từ khóa await --> Hàm async sẽ bị tạm dừng để nhường luồng chính cho các hàm khác
// - Khi nào Promise sau await thực thi xong --> Đẩy toàn bộ kết quả sau await vào microtask để chờ Event loop

//async func
//ham2
//ham3