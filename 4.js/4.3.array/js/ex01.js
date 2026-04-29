//object ==> key: value
//array ==> index
//array đóng vai trò là 1 danh sách
//object ==> Thể hiện chi tiết

//Khai báo
// const myArr = ["Item 1", "Item 2", 1, 2, 3];

//Truy cập vào phần tử
// console.log(myArr[1]);

//Cập nhật phần tử
// myArr[2] = "ABC";

//Thêm phần tử mới
// myArr[myArr.length] = "Khang Anh";
// myArr[myArr.length] = "An";

// console.log(myArr);

//Duyệt qua từng phần tử
// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

// for (const index in myArr) {
//   console.log(myArr[index]);
// }

// for (const value of myArr) {
//   console.log(value);
// }

//Xóa
// const newArr = [];
// const indexDelete = 2;
// for (const index in myArr) {
//   if (+index === indexDelete) {
//     continue;
//   }
//   newArr[newArr.length] = myArr[index];
// }
// console.log(newArr);

console.log(Array.prototype);

//1. length: Lấy số lượng phần tử
// const users = ["User 1", "User 2", "User 3", "User 4"];
// console.log(users.length);
// users.length = 2;
// console.log(users);

//2. at(index): Lấy phần tử theo index
// const users = ["User 1", "User 2", "User 3", "User 4"];
// console.log(users.at(-2));
// console.log(users[users.length - 1]);

//3. concat(arr1, arr2,...): Nối mảng

// const users = ["User 1", "User 2", "User 3", "User 4"];
// const newArr = [].concat([1, 2, 3], ["a", "b", "c"], [true, false, null]);
// console.log(newArr);

//4. fill(value): Cập nhật các phần tử thành 1 giá trị
// const users = ["User 1", "User 2", "User 3", "User 4"];
// const newArr = users.fill(0);
// console.log(users);
// console.log(newArr);

//5. indexOf(value): Tìm giá trị phần tử trong mảng, nếu tìm thấy trả về index đầu tiên

//6. lastIndexOf(value): Tìm giá trị phần tử trong mảng, nếu tìm thấy trả về index cuối cùng

//7. includes(value): Tìm phần tử, trả về true/false

//8. slice(start,end): Cắt mảng từ start đến end
// const users = ["User 1", "User 2", "User 3", "User 2", "User 4"];
// console.log(users.slice(1, 4));
// console.log(users.slice(1));
// console.log(users.slice(-2));

//9. join(): Nối các phần tử thành chuỗi
// const users = ["User 1", "User 2", "User 3", "User 2", "User 4"];
// console.log(users.join(" - "));

//10. push(value1, value2,...): Thêm các phần tử vào cuối mảng và trả về số lượng phần tử sau khi thêm

//11. unshift(value1, value2,...): Thêm các phần tử vào đầu mảng và trả về số lượng phần tử sau khi thêm

//12. pop(): Xóa phần tử cuối mảng và trả về giá trị vừa xóa

//13. shift(): Xóa phần tử đầu mảng và trả về giá trị vừa xóa

//14. splice(index, count): Xóa count phần từ index

//15. reverse(): Đảo ngược mảng

//16. sort(): Sắp xếp theo thứ tự tăng dần
// const names = ["Tam", "Van", "An", "Dung", "Anh"];
// names.sort();
// console.log(names);

// const numbers = [5, 2, 9, 1, 8, 10, 80];
// console.log(numbers);
// numbers.sort((a, b) => {
//   console.log(`a`, a, `b`, b);
//b: Phần tử trước
//a: Phần tử sau
//Nếu return về số âm --> đổi chỗ a, b
//   if (b > a) {
//     return -9;
//   }
//   return b - a;
// });
// console.log(numbers);

//Ý tưởng sắp xếp: Khi nào sai sẽ đổi chỗ

// const users = [
//   "Ta Hoang An",
//   "Nguyen Van Tuan",
//   "Truong Van Dung",
//   "Nguyen Thi Anh",
// ];
//Yêu cầu: Sắp xếp mảng sau theo thứ tự tên tăng dần
/*
[
  "Ta Hoang An",
   "Nguyen Thi Anh",
   "Truong Van Dung",
  "Nguyen Van Tuan",
];
*/

//So sánh mảng
//- Không so sánh trực tiếp 2 mảng với nhau được
// const arr1 = ["Item 1", "Item 2", [[2]]];
// const arr2 = ["Item 1", "Item 2", [[3]]];

// const compareArray = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (const index in arr1) {
//     if (Array.isArray(arr1[index]) && Array.isArray(arr2[index])) {
//       return compareArray(arr1[index], arr2[index]);
//     }
//     if (arr1[index] !== arr2[index]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(compareArray(arr1, arr2));

//17. flat(): Làm phẳng mảng
// const number = [1, 2, 3, [4, [5, [6], 7]]];
// console.log(number);
// const flatNumber = number.flat(Infinity);
// console.log(flatNumber);

//18. forEach(callback): Duyệt mảng và đẩy dữ liệu vào callback
// const users = ["User 1", "User 2", "User 3"];
// users.forEach((value, index) => {
//   console.log(value, index);
// });

//19. map(callback):
// Duyệt mảng và dẩy dữ liệu vào callback
// Trả về mảng mới, giá trị từng phần tử mảng mới là giá trị của callback
// const numbers = [5, 2, 9, 1];
// const newNumbers = numbers.map((value, index) => {
//   console.log(value, index);
//   return value * 2;
// });
// console.log(newNumbers);

//20. filter(callback)
// Duyệt mảng và dẩy dữ liệu vào callback
// Trả về mảng mới, giá trị của mảng mới sẽ là giá trị của từng phần tử trong mảng ban đầu khi thỏa mãn điều kiện callback trả về truthy
// const numbers = [5, 2, 9, 1];
// const newNumbers = numbers.filter((value, index) => {
//   console.log(value, index);
//   //   return value % 2 !== 0;
//   return value;
// });
// console.log(newNumbers);

//21. some(callback):
// - Duyệt qua từng phần tử
// - Trả về boolean
// - Trả về true nếu ít nhất callback có 1 lần return truthy

//22. every(callback)
// - Duyệt qua từng phần tử
// - Trả về boolean
// - Trả về true nếu tất cả callback return truthy
// const numbers = [5, 2, 9, 1];
// const result = numbers.every((value) => {
//   console.log(value);

//   return value % 2 !== 0;
// });
// console.log(result);

//23. find(callback)
// - Duyệt qua từng phần tử
// - Trả về phần tử đầu tiên tìm được

//24. findLast(callback)
//  - Duyệt qua từng phần tử
// - Trả về phần tử cuối cùng tìm được

//25. findIndex(callback): Giống find nhưng trả về index

//26. findLastIndex(callback): Giống findLast nhưng trả về index
// const numbers = [5, 2, 9, 1];
// const result = numbers.findLast((value) => {
//   return value % 2 !== 0;
// });
// console.log(result);

//27. reduce(callback, initialValue)
// const numbers = [5, 10, 15, 20, 25, 30];
// console.log(numbers);

// const result = numbers.reduce((prevValue, value, index) => {
//   console.log(`prevValue: ${prevValue}`, `value: ${value}`, `index: ${index}`);
//   return value;
// }, 0);
// console.log(result);

//Ví dụ: Tìm giao giữa 2 mảng
// const arr1 = [2, 5, 9, 1];
// const arr2 = [5, 1, 3, 8];
//Output: [5,1]
// const result = arr1.reduce((acc, cur) => {
//   if (arr2.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);
// console.log(result);

// const users = [
//   {
//     name: "An",
//     salary: 1000,
//   },
//   {
//     name: "Anh",
//     salary: 2000,
//   },
// ];
// const total = users.reduce((acc, cur) => {
//   return acc + cur.salary;
// }, 0);
// console.log(total);

//Bài tập
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const size = 2;
//Dùng reduce thực hiện chunk array thành kết quả như sau
//[[1,2], [3,4], [5,6], [7,8], [9]]
// const chunkArr = numbers.reduce((acc, cur, index) => {
//   if (index % size === 0) {
//     const sub = numbers.slice(index, index + size);
//     acc.push(sub);
//   }
//   return acc;
// }, []);
// console.log(chunkArr);

//Đặc điểm khi làm việc với các hàm
// - Tận dụng những hàm có sẵn (Tối ưu)
// - Dùng đúng ngữ cảnh

//Tham chiếu
class A {
  getMessage() {}
}
const arr1 = ["An", "an@gmail.com", () => {}, Symbol("id"), new A(), [10]];

//shallow copy
//1. spread
// const arr2 = [...arr1];

//2. array method trả về mảng mới
// const arr2 = arr1.slice(0);

//deep copy
const json = JSON.stringify(arr1);
const arr2 = JSON.parse(json);

arr2[0] = "An Unicode";
arr2[arr2.length - 1][0] = 20;

console.log(arr1);
console.log(arr2);
