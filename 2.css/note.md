# Học css

## Cách viết css

1. Dùng thẻ style trong file html (Internal CSS)

```
<style>
    Code css
</style>
```

2. Viết trực tiếp vào từng thẻ html thông qua thuộc tính style (Inline CSS)

3. Tách file css (External CSS)

## Cấu trúc css

```
selector1 {
    thuoctinh1: giatri1;
    thuoctinh2: giatri2;
}
selector2 {
    thuoctinh1: giatri1;
    thuoctinh2: giatri2;
}
selector3 {
    thuoctinh1: giatri1;
    thuoctinh2: giatri2;
}
```

## Quy tắc đặt tên class, id

- Dùng danh từ
- Viết thường
- Dùng Tiếng Anh
- Nối các từ bằng gạch ngang hoặc gạch dưới
- Không được bắt đầu bằng số

## Selector

```
* --> Đại diện cho tất cả các thẻ html
id --> #id
class --> .class
tag --> tag
```

Lớp giả (Pseudo class)

Cú pháp: selector:ten-lop-gia

- hover -> Trỏ chuột
- active -> Click chuột và giữ
- focus -> Áp dụng trong form
- checked --> Khi radio, checkbox được check

## Đơn vị

- px --> Điểm ảnh (Tuyệt đối)
- em --> Tỷ lệ với cỡ chữ của phần tử cha gần nhất
- rem --> Tỷ lệ với cỡ chữ của phần tử gốc (html)
- % --> Tỷ lệ với phần tử cha
- vh
- vw

## Giá trị kế thừa

- initial: Kế thừa mặc định của trình duyệt
- inherit: Kế thừa từ thẻ cha

## Thuộc tính width, height

- Chỉ áp dụng cho thẻ block
- Với inline -> Không sử dụng được
- Muốn sử dụng -> Chuyển về block => display: block | inline-block

Đơn vị

- vh (viewport height)
- vw (viewport width)
- % => Tỷ lệ với kích thước của thẻ cha

Các thuộc tính mở rộng

- min-width --> Chiều rộng nhỏ nhất
- max-width --> Chiều rộng lớn nhất
- min-height --> Chiều cao nhỏ nhất
- max-height --> Chiều cao lớn nhất

## Hiển thị

- display: none --> Ẩn phần tử
- display: block --> Chuyển thành block
- display: inline --> Chuyển thành inline
- display: inline-block --> Kết hợp cả 2 (Vừa trên 1 dòng, vừa thay đổi được width, height)

Thuộc tính border-radius -> bo góc
Nếu width = height, radius >= 50% --> hình tròn

## Flexbox: Kỹ thuật trong css cho phép dàn trang linh hoạt

- Kích hoạt flexbox ==> display: flex

1. Thuộc tính flex container

- flex-direction: Chọn hướng cho trục chính

* row --> Nằm ngang
* row-reverse --> Nằm ngang, đảo ngược
* column --> Nằm dọc
* column-reverse --> Nằm dọc, đảo ngược

- justify-content: Căn chỉnh các item theo hướng của trục chính

* flex-start
* flex-end
* center

- align-items: Căn chỉnh các item theo hướng của trục cross

* stretch
* flex-start
* flex-end
* center

- flex-wrap: wrap các item nếu tổng kích thước vượt quá kích thước container

* nowrap
* wrap
* wrap-reverse

- gap: Thay đổi khoảng cách giữa các phần tử

2. Thuộc tính flex item

- flex-grow: number --> Lấp đầy khoảng trống của container bằng cách giãn các item (Mặc định = 0)

- flex-basis: Thiết lập kích thước ban đầu của item

- flex-shrink: Thiết lập tỷ lệ co lại (Mặc định = 1, tự động co lại)

- order: Sắp xếp các item theo thứ tự chỉ định
