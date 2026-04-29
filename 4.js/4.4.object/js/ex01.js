"use strict";
//Object: Đặc tả thông tin chi tiết
//Ví dụ: Thể hiện 1 thông tin sản phẩm: id, tên, giá,...
//Quản lý theo key, value
/*
{
    id: 1,
    name: 'sp 1',
    price: 12000
}

Các thể loại:

- Literal Object
- Constructor (Function) / Class
*/

//value của key là function --> method
//value của key không phải function --> property

//Khởi tạo object
// const myObj = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 35,
//   doSomething: function () {
//     console.log("Hello anh em");
//   },
//   sayHi() {
//     console.log("Ok chưa?");
//   },
// };

// //Thêm mới
// myObj.address = "Hà Nội";

// //Cập nhật
// myObj.name = "Hoàng An Unicode";

// //Xóa
// // delete myObj.age;

// console.log(myObj);

// console.log(myObj.email);
// console.log(myObj["age"]);
// const a = "age";
// console.log(myObj[a]); //computed property

//Lấy danh sách key
// for (const key in myObj) {
//   //   console.log(key, myObj[key]);
//   if (typeof myObj[key] === "function") {
//     myObj[key]();
//   } else {
//     console.log(myObj[key]);
//   }
// }

//Object.keys(obj) --> Trả về mảng chứa danh sách các key
// Object.keys(myObj).forEach((key) => {
//   if (typeof myObj[key] === "function") {
//     myObj[key]();
//   } else {
//     console.log(myObj[key]);
//   }
// });

//Ví dụ: Kiểm tra 1 object có rỗng hay không?
// const errors = { x: 10 };
// if (!Object.keys(errors).length) {
//   console.log("Rỗng");
// }

//Bài toán: Làm sao để kiểm tra 1 biến là object
// const isObject = (obj) =>
//   typeof obj === "object" && obj !== null && !Array.isArray(obj);

// const a = null;
// console.log(isObject(a));

//Object.values(obj): Trả về 1 mảng chứa danh sách các value của object
// console.log(Object.values(myObj));

//Object.entries(obj): Trả về 1 mảng chứa cả key và value
// console.log(Object.entries(myObj));

//Object.fromEntries(entries): Chuyển entries array thành object
// const entries = [
//   ["name", "Hoàng An"],
//   ["email", "hoangan.web@gmail.com"],
//   ["age", 30],
// ];
// console.log(entries);
// console.log(Object.fromEntries(entries));

// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const entries = formData.entries();
//   const data = Object.fromEntries(entries);
//   console.log(data);
// });

//Zod --> validate --> array error
// const errors = [
//   {
//     code: "invalid_string",
//     validation: "min",
//     message: "Name is required",
//     path: ["name"],
//   },
//   {
//     code: "invalid_string",
//     validation: "email",
//     message: "Invalid email",
//     path: ["email"],
//   },
//   {
//     code: "too_small",
//     minimum: 18,
//     type: "number",
//     inclusive: true,
//     exact: false,
//     message: "Number must be greater than or equal to 18",
//     path: ["age"],
//   },
// ];

/*
{
    name: "Name is required",
    email: "Invalid email",
    age: "Number must be greater than or equal to 18"
}
*/
// const error = Object.fromEntries(
//   errors.map((error) => [error.path[0], error.message]),
// );
// console.log(error);

//Object.assign(target, ...source): Nối các object source vào target

// const obj1 = {
//   name: "An",
// };

// const obj2 = {
//   email: "an@gmail.com",
// };

// const obj3 = {
//   address: "Hà Nội",
// };

// const result = Object.assign(obj1, obj2, obj3);
// console.log(obj1);
// console.log(result);

// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);

// const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);

//Ví dụ: Bài toán xử lý URL
// const queryString =
//   "keyword=học+javascript&status=active&category=1&category=2&category=3";

/*
{
    keyword: "học javascript",
    status: "active",
    category: ["1", "2", "3"]
}
*/

// const query = queryString.split("&").reduce((acc, cur) => {
//   let [key, value] = cur.split("=");
//   value = value.replaceAll("+", " ");
//   if (!acc[key]) {
//     acc[key] = value;
//   } else if (!Array.isArray(acc[key])) {
//     acc[key] = [acc[key]];
//   }
//   if (Array.isArray(acc[key])) {
//     acc[key].push(value);
//   }
//   return acc;
// }, {});
// console.log(query);

//Từ khóa this (context), thể hiện object đang gọi method

//mode: normal mode, strict mode
// let x;
// x = 10;
// console.log(x);

// const user = {
//   fullname: "Hoàng An",
//   email: "an@gmail.com",
//   getName() {
//     console.log(this.fullname);
//   },
//   getInfo() {
//     // const _this = this;
//     return {
//       //
//       age: 35,
//       getAge() {
//         console.log(this.age);
//       },
//       getEmail: () => {
//         console.log(this.email);
//       },
//     };
//   },
// };
// // user.getName();
// user.getInfo().getEmail();

//Làm sao để thay đổi this của 1 hàm
// const a = {
//   x: 10,
// };
// const b = {
//   getX(value1, value2) {
//     console.log(this.x);
//     console.log(value1, value2);
//   },
// };
// const doSomething = b.getX.bind(a);
// doSomething(50, 100);

// b.getX.call(a, 10, 20);
// const values = [50, 100];
// b.getX.apply(a, values);
// b.getX.call(a, ...values);

//app.get('/users', userController.index);

//Constructor --> PascalCase
//Giống 1 bản thiết kế của object
// function User(name, email) {
//   this.name = name;
//   this.email = email;
//   this.getName = function () {
//     console.log(this.name);
//   };
//   this.getEmail = function () {
//     console.log(this.email);
//   };
// }

// const user = new User("An", "an@gmail.com");
// user.age = 35;
// console.log(user);

// const customer = new User("Khang Anh", "khanganh@gmail.com");
// console.log(customer);

//instance --> Constructor --> Object
//Literal --> Object
// const myObj = {};
// console.log(myObj);

//Prototype: Kế thừa các key
// Object.prototype.message = "Học js không khó";
// const a = {
//   x: 10,
// };
// const b = {
//   y: 20,
// };
// console.log(a, a.message);
// console.log(b, b.message);

// User.prototype.value = "Hello anh em";
// const user = new User();
// console.log(user.value);
// const a = {
//   x: 10,
// };
// console.log(a.value);

// const users = []; //Array --> Object --> Prototype
// console.log(users.message);

// const fullname = "Hoàng An"; //String --> Object --> Prototype
// console.log(fullname.message);

// const age = 33; //Number --> Object --> Prototype
// console.log(fullname.message);

// const check = false; //Boolean --> Object --> Prototype
// console.log(fullname.message);

// const price = 123n; //BigInt --> Object --> Prototype
// console.log(price.message);

// const id = Symbol("id"); //Symbol --> Object --> Prototype
// console.log(id.message);

// function sayHi() {} //Function --> Object --> Prototype
// console.log(sayHi.message);

// class User {
//   //Phương thức khởi tạo
//   constructor(name, email) {
//     //Định nghĩa thuộc tính
//     //Gán giá trị khởi tạo
//     this.name = name;
//     this.email = email;
//   }
//   getName() {
//     console.log(this.name);
//   }
//   getEmail() {
//     console.log(this.email);
//   }
// }

// const user = new User("Hoàng An", "hoangan.web@gmail.com");
// console.log(user);
// user.getName();
// user.getEmail();

class Todo {
  constructor() {
    this.handleClick = this.handleClick.bind(this);
  }
  init() {
    const btn = document.querySelector("button");
    btn.onclick = this.handleClick;
  }
  handleClick() {
    console.log("Clicked");
    this.showOutput();
  }
  showOutput() {
    console.log("Ok rồi");
  }
}
new Todo().init();
