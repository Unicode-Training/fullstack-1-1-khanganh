//Chuỗi
// let fullname = "Hoàng An";
// console.log(fullname[0]);
// console.log(fullname[1]);
// console.log(fullname[2]);

//Khi truy cập vào các phương thức, thuộc tính xử lý chuỗi ==> JS sẽ tạo Object tạm thời bọc bên ngoài

// console.log(fullname.length); //Dấu . chỉ tồn tại trong object (tenobject.tenthuoctinh hoặc tenobject.tenphuongthuc())

//Trừ null, undefined sẽ không có object wrapper

console.dir(String.prototype);
// console.log(Number.prototype);
// console.log(Boolean.prototype);
// console.log(BigInt.prototype);
// console.log(Symbol.prototype);
// console.log(Function.prototype);

//1. length: Lấy độ dài của chuỗi
//2. charAt(index): Lấy ký tự theo index, dùng at(index) có thể lấy từ cuối chuỗi
//3. charCodeAt(index): Trả về mã ASCII của ký tự theo index
//4. slice(start, end): Cắt chuỗi từ start đến end-1
// let str = "Hoàng An";
// console.log(str.slice(-4, 6));
//5. indexOf(subString): Tìm vị trí xuất hiện đầu tiên của subString, nếu không thấy trả về -1
//6. lastIndexOf(subString): Tìm vị trí cuối
//7. includes(subString): Tìm sự tồn tại của subString, trả về true / false
//8. repeat(n): Lặp chuỗi n lần
// let char = `*`;
// console.log(char.repeat(10));
//9. replace(chuoicantim, chuoithaythe)
// --> Có thể tìm và thay thế theo regex
//10. replaceAll(chuoicantim, chuoithaythe)
// let str = "Số điện thoại của tôi là 0388875179 và 0394822896";
// console.log(str.replace(/0\d{9}/g, "***"));
//11. toUpperCase(): Chuyển thành chữ hoa
//12. toLowerCase(): Chuyển thành chữ thường
//13. trim(): Loại bỏ khoảng trắng đầu, cuối chuỗi
//14. trimStart(): Loại bỏ khoảng trắng đầu chuỗi
//15. trimEnd(): Loại bỏ khoảng trắng cuối chuỗi
//16. split(chuoi): Tách chuỗi thành mảng
//17. startsWith(chuoi): Kiểm tra chuỗi con có nằm ở đầu hay không?
//18. endsWith(chuoi): Kiểm tra chuỗi con nằm ở cuối chuỗi
// const url = `/admin/users.html`;
// console.log(url.endsWith(`.html`));
//19. padStart(length, filterString)
//20. padEnd(length, filterString)

// let number = "1";
// console.log(number.padEnd(2, "0"));

//Cách xử lý chuỗi: Tách thành từng chuỗi con --> xử lý --> nối lại (vào biến mới)

//Bài 1:
// let fullname = "tạ hoàng    an"; //Tạ Hoàng An
//Ps: không được dùng mảng
// fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);

// for (let i = 0; i < fullname.length; i++) {
//   const char = fullname.charAt(i);
//   const charNext = fullname.charAt(i + 1);
//   if (char === " " && charNext !== " ") {
//     const index = i + 1;
//     fullname =
//       fullname.slice(0, index) +
//       fullname.charAt(index).toUpperCase() +
//       fullname.slice(index + 1);
//   }
// }
// console.log(fullname);

//Bài tập Highlight
// - Tìm --> highlight --> cắt --> tìm chuỗi mới --> Cho đến khi hết
let keyword = " ";
let content = `<h3>Học lập trình javascript. Học lập trình javascript. Học lập trình javascript. Học lập trình javascript. vhduvhd vdhvudh</h3>`;

let pos = content.toLowerCase().indexOf(keyword.toLowerCase());
let newContent = "";
let count = 0;
while (pos !== -1) {
  newContent +=
    content.slice(0, pos) +
    "<span>" +
    content.slice(pos, pos + keyword.length) +
    "</span>";
  content = content.slice(pos + keyword.length);
  pos = content.toLowerCase().indexOf(keyword.toLowerCase());
  count++;
}

newContent += content;

let result = `Đã tìm được ${count} từ khóa`;
document.body.innerHTML = `
<p>Từ khóa: ${keyword}</p>
${newContent}
<p>${result}</p>
`;
