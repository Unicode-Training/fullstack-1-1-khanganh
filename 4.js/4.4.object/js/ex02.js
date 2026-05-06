//Kế thừa class
// - Class cha
// - Class con: Dùng mọi thứ của cha (property, method)

// class User {
//   constructor(name, email) {
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

// class Auth extends User {
//   constructor(name, email, age) {
//     super(name, email); //Gọi constructor của class cha
//     this.age = age;
//   }
//   getInfo() {
//     this.getName();
//     this.getEmail();
//   }
//   getEmail() {
//     //Gọi getEmail của class cha
//     super.getEmail();
//     console.log("new email");
//   }
// }
// const auth = new Auth("Hoàng An", "hoangan.web@gmail.com", 10);
// console.log(auth);

// auth.getInfo();

// class User {
//   #income = 1000;
//   #myMethod() {
//     console.log("myMethod");
//   }
//   getIncome() {
//     this.#myMethod();
//     console.log(this.#income);
//   }
// }
// const user = new User();
// user.getIncome();
// user.#myMethod();

//Static method, static property ==> Không phụ thuộc vào instance
// class User {
//   static message = "Hello anh em";
//   email = "hoangan.web@gmail.com";
//   static instance = null;
//   constructor() {
//     console.log("Khởi tạo instance User");
//   }
//   static getInstance() {
//     if (!this.instance) {
//       this.instance = new this();
//     }
//     return this.instance;
//   }
//   static getMessage() {
//     // console.log(this.message);
//     console.log(this.getInstance().email);
//   }
//   getEmailAndMessage() {
//     console.log(this.email);
//     //Truy cập vào thuộc tính static
//     console.log(this.constructor.message);
//   }
// }

// console.log(User.message);
// User.getMessage();
// User.getMessage();
// User.getMessage();
// User.getMessage();
// User.getMessage();
// const user = new User();
// user.getEmailAndMessage();

//setter, getter
// class User {
//   #data = ["Item 1", "Item 2", "Item 3"];
//   #result = 0;
//   get latest() {
//     const value = this.#data.at(-1);
//     if (!value) {
//       throw new Error("No value");
//     }
//     return value;
//   }
//   set latest(value) {
//     if (typeof value !== "string") {
//       throw new Error("value phải là string");
//     }
//     this.#data.push(value);
//   }
//   get all() {
//     return this.#data;
//   }
//   get total() {
//     return this.#result;
//   }
//   set total(value) {
//     this.#result = value;
//   }
// }
// const user = new User();
// user.latest = "Hello anh";
// user.latest = 10;
// console.log(user.latest);
// console.log(user.all);

// user.total += 10;
// user.total += 10;
// console.log(user.total);

//Sao chép object
//1. Sao chép nông
// - dùng Object.assign()
// - dùng spread
//2. Sao chép sâu
// - Dùng JSON
// - Dùng thư viện ngoài
// - Đệ quy

// const a = {
//   x: 10,
//   y: 20,
//   meta: {
//     value: "An",
//   },
//   sayHi() {
//     console.log("Hello anh em");
//   },
// };
// const b = { ...a };
// const b = JSON.parse(JSON.stringify(a));
// const b = _.cloneDeep(a);
// b.x = 30;
// b.meta.value = "Ahihi";
// console.log(a);
// console.log(b);

//Destructuring
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 35,
//   address: "HN",
// };
// const { name: fullname, email, age = 30 } = user;
// console.log(fullname, email, age);
// const { name, ...rest } = user;
// console.log(rest);

// const users = ["An", "an@gmail.com", 35, "HN"];
// const [fullname, email, ...rest] = users;
// console.log(fullname, email);
// console.log(rest);
// const [name, , age] = users;
// console.log(name, age);

// const state = Object.freeze({
//   count: 10,
//   message: "Hello anh em",
//   products: ["Product 1", "Product 2", "Product 3"],
// });

// const newState = {
//   ...state,
//   products: [...state.products, "Product 4"],
// };
// console.log(newState);

// function dosomething() {
//   console.log(this);
// }
// const user = {
//   myMethod() {
//     dosomething();
//   },
//   dosomething,
// };
// user.dosomething();
