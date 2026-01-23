# HTML

## Nhóm thẻ

1. Block

- Chiều rộng mặc định = 100% so với chiều rộng thẻ cha
- Luôn ở 1 hàng mới

2. Inline

- Chiều rộng mặc định = với nội dung trong thẻ (auto)
- Các thẻ inline nằm cạnh nhau -> Thành 1 hàng

## Cấu tạo thẻ

1. Thẻ đầy đủ

```
<tenthe thuoctinh1="giatri1" thuoctinh2="giatri2">Nội dung</tenthe>
```

2. Thẻ tự đóng

```
<tenthe thuoctinh1="giatri1" thuoctinh2="giatri2" />
```

Web tra cứu các thẻ html: https://htmlreference.io/

## Cách học HTML

- Học theo chức năng
- Đủ dùng: 30 thẻ
- Làm nhiều kết hợp tra cứu

## Comment trong html

- Chú thích khi đọc lại code
- Vô hiệu hóa 1 đoạn code khi đang trong quá trình phất triển

## Chi tiết các thẻ

### Các thẻ trong nhóm block

1. Heading

```
<h1>Tiêu đề 1</h1>
<h2>Tiêu đề 2</h2>
<h3>Tiêu đề 3</h3>
<h4>Tiêu đề 4</h4>
<h5>Tiêu đề 5</h5>
<h6>Tiêu đề 6</h6>
```

Tips: Nhân bản code

- Chọn đoạn code
- Nhấn tổ hợp phím: Alt + Shift + arrow down

2. Paragraph

```
<p>Đoạn văn 1</p>
<p>Đoạn văn 2</p>
<p>Đoạn văn 3</p>
```

Cú pháp tạo văn bản ngẫu nhiên: lorem

3. List

Danh sách không theo thứ tự

```
<ul>
    <li>Danh sách 1</li>
    <li>Danh sách 2</li>
    <li>Danh sách 3</li>
    <li>Danh sách 4</li>
</ul>
```

Danh sách theo thứ tự

```
<ol>
    <li>Danh sách 1</li>
    <li>Danh sách 2</li>
    <li>Danh sách 3</li>
    <li>Danh sách 4</li>
</ol>
```

4. Thẻ div (Phân chia khu vực)

- Nhóm các thẻ khác
- Phù hợp khi áp dụng CSS để chia bố cục trang web

5. Thẻ hr (Gạch ngang)

```
<hr/>
```

6. Thẻ blockquote (Trích dẫn)

- Trích dẫn 1 nội dung ở trên trang web
- Trích dẫn câu nói của người nổi tiếng

### Các thẻ trong nhóm inline

1. Thẻ chèn liên kết (a)

```html
<a href="dia-chi-trang-web">Nội dung hiển thị</a>
```

- href: Địa chỉ trang web hoặc đường dẫn nội bộ trong trang web
- target: Mục tiêu khi người dùng mở trang web (Tab hiện tại, tab mới)

* Không để gì, `_self`
* `_blank`

- title: Tiêu đề khi người dùng trỏ chuột

Đường dẫn nội bộ

```
. -> Cùng cấp
../ -> Lùi 1 cấp
../../ -> Lùi 2 cấp
/ --> Đẩy về root (Sau port)
```

2. Thẻ chèn hình ảnh

```html
<img src="duong-dan-hinh-anh" />
```

- src: Đường dẫn ảnh
- width: Chiều rộng (px)
- height: Chiều cao (px)
- title: Tiêu đề khi trỏ chuột
- alt: Văn bản thay thế khi ảnh lỗi

3. Thẻ định dạng

- b: In đậm
- u: Gạch chân
- i: Nghiêng
- s: Gạch ngang

4. Thẻ công thức toán học, hóa học

- sub
- sup

4. Thẻ định dạng kiểu (span)

5. Bảng

```
table
    tr --> hàng
        td --> cột
        td --> cột
        td --> cột
    tr --> hàng
        td --> cột
        td --> cột
        td --> cột
    tr --> hàng
        td --> cột
        td --> cột
        td --> cột
```

6. Form

```
form 1
    field 1
    field 2
    field 3
    button
form 2
    field 1
    field 2
    field 3
    button
form 3
    field 1
    field 2
    field 3
    button
```

- các phải ngang hàng (Độc lập)
- trong 1 form sẽ nhiều trường (field) + nút gửi (Đẩy dữ liệu lên back-end)

Thuộc tính trong form

- method: Phương thức gửi dữ liệu lên server (get, post)
- action: Đường dẫn phía server

Trong quá trình học html -> Chỉ cần quan tâm đến các trường thường xuất hiện trong form

Nhóm 1: Các trường nhập liệu 1 dòng

```
<input type="kieu-du-lieu"/>
```

- placeholder: Dòng mô tả
- name: Định danh để gửi dữ liệu lên server
- id: Định danh phía giao diện
- type: kiểu dữ liệu

* text --> Mặc định, nhận bất kỳ
* number --> Chỉ nhận số
* email --> Chỉ nhận email
* password --> Mã hóa dạng password
* date --> Ngày tháng năm
* file --> Chọn file (Dùng để upload)
