// document.write("<h2>Hello anh em</h2>");
//DOM (API của trình duyệt)
// document.body.innerHTML = "<h2>Hello anh em</h2>";
//Data type
//1. string
//2. number
//3. undefined
//4. boolean
//5. bigInt
//6. Symbol
//7. null
// --> Kiểu dữ liệu nguyên thủy
//8. object
// - Literal object
// - Array
// - Function
// --> Kiểu dữ liệu tham chiếu (Có địa chỉ)

// Cách kiểm tra kiểu dữ liệu của 1 giá trị:
// C1: Dùng từ khóa typeof phía trước giá trị cần kiểm tra
// C2: Dùng hàm typeof(giatri)

// console.log(typeof "Hello");
// console.log(typeof 123);
// console.log(typeof undefined);
// console.log(typeof true);
// console.log(typeof BigInt(123));
// console.log(typeof Symbol("id"));
// let a = null;
// console.log(a === null);
// console.log(typeof {});
// console.log(typeof []);
// function something() {}
// console.dir(something);

//Biến
// - Đặt theo camelCase
// - Không được đặt trùng với các từ khóa của js
// - Trong cùng 1 phạm vi, không được khai báo từ 2 lần trở lên với 1 biến
// let userId = 10;
// if (userId) {
//   userId = 20;
//   console.log(userId);
// }
// console.log(userId);

//Hằng số
// const a = undefined;
//TH1: Nếu hằng số là các giá trị xác trước ban đầu
// const TIMEOUT = 1000;
// const JWT_SECRET = "123";

//TH2: Hằng số phát sinh trong quá trình triển khai chương trình (Viết camelCase)
// let total = 0;
// for (let i = 0; i < 10; i++) {
//   const temp = i * i;
//   total += temp;
// }
// console.log(total);

//Toán tử
//1. Số học: +, -, *, /, **, ++, --, %
// let a = 10;
// let b = 20;
// let c = a ** b;
// console.log(c);
// let count = 1;
// let total = 0;
// total = ++count;
// console.log(total, count);
//Lưu ý:
// - Toán tử + bị trùng với toán tử nối chuỗi
// - Các toán tử số học còn lại --> tự động ép kiểu
// let a = "1";
// let b = 2;
//Ép kiểu số
// a = Number(a);
// a = +a; //shorthand
// let c = a + b;
// console.log(c);

//2. Gán
// let a = 10;
// let b = a;
// b += 10; //b = b + 10;
// console.log(b);

//3. So sánh
// >, >=, <, <=, ==, ===, !=, !==
//Luôn trả về true,false
//So sánh chuỗi
// let a = "an";
// let b = "Anh";
// console.log(a > b);

//4. Truthy/Falsy
// - Falsy: Trong ngữ cảnh so sánh ngầm định chuyển về false gọi là falsy: 0, "", undefined, null, false, NaN
// - Truthy: Ngược lại
// let a = -0;
// if (a) {
//   console.log("Đúng");
// } else {
//   console.log("Sai");
// }

//5. Toán tử luận lý
// &&: Tìm falsy, nếu tìm thấy dừng lại và trả về giá trị, nếu là truthy thì sẽ đến biểu thức tiếp theo. Nếu không có falsy --> trả về giá trị biểu thức cuối
// ||: Tìm truthy
// !: Ép về boolean, sau đó lấy kết quả phủ định
// let a = null;
// let b = 0;
// let result = a || b || "An";
// console.log(result);

// let a = 10;
// let b = !a;
// console.log(b);

//6. Toán nullish (??)
//Cú pháp: a ?? b
// let a = 0;
// let b = 10;
// let c = a || b;
// console.log(c);

//7. Toán tử 3 ngôi (?:)
//Cú pháp: dieukien ? giatridung : giatrisai
// let a = 0;
// let b = a ? "A" : "B";
// console.log(b);

//Câu lệnh rẽ nhánh
/*
1. Câu lệnh thiếu
if (dieukien) {
    Code
}

2. Câu lệnh đủ
if (dieukien) {
    Code dung
} else {
    Code sai    
}

3. Câu lệnh nhiều nhánh
if (dieukien1) {
    Code 1
} else if (dieukien2) {
    Code 2
} else if (dieukien3) {
    Code 3
} else {
    Code 4    
}

4. Lồng nhau

if (dieukien) {
    if (dieukien) {
    
    } else {
        
    }
} else {
    
}

switch (value) {
    case value1:
    case value2:
    case value3:
        Code;
        break;
    case value4:
    case value5:
    case value6:
        Code;
        break; 
    default:
        Code;
        break;
}

Chỉ dùng được so sánh bằng (===)
*/
// let action = "create";
// switch (action) {
//   case "create":
//   case "insert":
//   case "add":
//     console.log("THêm");
//     break;
//   case "edit":
//   case "update":
//     console.log("Sửa");
//     break;
//   case "delete":
//   case "remove":
//     console.log("Xóa");
//     break;
//   default:
//     console.log("Danh sách");
//     break;
// }

//Vòng lặp
//for
// for (let i = 1; i <= 10; i += 2) {
//   console.log(i);
// }
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }
//while
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
//do while
// let i = 100;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

//Ví dụ: Đảo ngược số
// let number = 53267;
// let result = 0;
// while (number !== 0) {
//   let temp = number % 10;
//   number = (number - temp) / 10;
//   result = result * 10 + temp;
// }
// console.log(result);

// let number = 53267;
// let result = +number.toString().split("").reverse().join("");
// console.log(result);

//Function Decralation
// function getMessage(value1, value2 = "abc") {
//   console.log("Hello");
//   console.log(value1, value2);
//   return "An";
// }
// console.log(getMessage("An"));

// let value = "An";
// let input = `Xin chào ${value} ABC`; //ES6

// console.log(input);

// let input = `
// let a = 10;
// let b = 20;
// let total = a + b;
// console.log(total);
// `;

// const myFunc = new Function(input);
// myFunc();

//Expression Function (Hàm biểu thức)
// const myFunction = function () {
//   console.log("Hello anh em");
// };
// const abc = myFunction;
// const def = abc;
// def();

//Callback function: Truyền 1 hàm vào 1 hàm khác thông qua tham số
// const display = function (a, b) {
//   console.log(a);
//   if (typeof b === "function") {
//     b();
//   }
// };
// const handler = function (value) {
//   console.log("Xin chào anh em");
//   console.log(value);
// };
// display(10, function () {
//   handler("Ok chưa?");
// });

// const handler = function () {
//   console.log("Chào anh em");
// };
// setTimeout(handler, 1000);

//Rest parameter
// const sum = function (a, b, ...args) {
//   console.log(a, b);
//   console.log(args);
// };
// sum(10, 20, 30, 40, 50, 60);

//rest parameter
// const display = function (callback, ...args) {
//   if (typeof callback === "function") {
//     callback(...args); //spread
//   }
// };

// const handler = function (value1, value2) {
//   console.log("Xin chào anh em");
//   console.log(value1, value2);
// };

// display(handler, "A", "B");
// setTimeout(handler, 1000, "A", "B");

//arrow function (ES6)
// const getMessage = (msg, type = "success") => {
//   console.log("Hello anh em", msg);
//   console.log(type);
// };
// getMessage("Unicode");
// setTimeout(() => {
//   console.log("Hello anh em");
// }, 1000);
// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

// const getUser = () => ["An"];
// console.log(getUser());

//Closure
// let a = 10;

// const display = (value) => {
//   let b = 20;
//   const showMessage = (msg) => {
//     console.log("Hello anh em");
//     console.log(`msg`, msg);
//     console.log(`b`, b);
//     console.log(`value`, value);
//     console.log(`a`, a);
//   };
//   showMessage("Học js không khó");
// };
// display("Hoàng An");

// const display = (value) => {
//   console.log("Display");
//   return (msg) => {
//     console.log("Học js không khó");
//     console.log(`msg`, msg);
//     console.log(`value`, value);
//   };
// };
// const showMsg = display("Hoàng An");
// showMsg("ABC");

//Note:
// - Bình thường: Hàm sẽ giải phóng các biến bên trong (Cục bộ) sau khi hàm thực thi xong

// const counter = () => {
//   let count = 0;
//   return () => {
//     count++;
//     console.log(count);
//   };
// };
// const incre = counter();
// incre();
// incre();
// incre();
// incre();

//IIFE
// ((value) => {
//   console.log("Hello anh em", value);
// })("An");

// (async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//   const data = await response.json();
//   console.log(data);
// })();

//Đệ quy
// - Phần cơ sở: Điều kiện dừng
// - Phần gọi đệ quy: Cần phải thay đổi đối số hoặc 1 điều kiện nào đó để tiến gần đến phần cơ sở

//Cách hoạt động
// - Mỗi lần gọi hàm đệ quy --> Lưu giá trị vào RAM
// - Khi nào chạy xong hết --> Thực hiện kết quả theo chiều ngược lại (Stack)

//S = 1 + 2 + 3 ... n
// const getTotal = (n) => {
//   //Phần cơ sở
//   if (n === 1) {
//     return 1;
//   }
//   const result = n + getTotal(n - 1);
//   console.log(n);

//   return result;
// };
// console.log(getTotal(10));

//10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1

// class A {
//   constructor() {}
// }

// class B {
//   constructor() {}
// }

// const b = new B(new A());

//Bài tập đệ quy: Tính tổng các số chẵn từ 1 đến n

// const getTotal = (n) => {
//   if (n < 2) {
//     return 0;
//   }
//   if (n % 2 !== 0) {
//     n--;
//   }
//   return n + getTotal(n - 2);
// };
// console.log(getTotal(15));
