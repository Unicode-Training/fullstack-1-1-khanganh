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
