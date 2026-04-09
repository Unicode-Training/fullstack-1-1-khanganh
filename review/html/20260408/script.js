/**
 * 
1. Viết hàm kiểm tra độ mạnh yếu mật khẩu

- Có ít nhất 2 chữ hoa
- Có ít nhất 2 chữ thường
- Có ít nhất 1 số
- Có ít nhất 1 ký tự đặc biệt: !@#$%^&*()

Lưu ý: Không dùng regex, array,...
 */

const password='123abcABC!'

const checkPassword = (password) => {
  let upperCaseCount = 0;
  let lowerCaseCount = 0;
  let numberCount = 0;
  let specialCharCount = 0;
  const specialChars = '!@#$%^&*()';

  for (let i=0; i<password.length; i++) {
    const char = password[i];
    if (char >= 'A' && char <= 'Z') {
      upperCaseCount++;
    } else if (char >= 'a' && char <= 'z') {
      lowerCaseCount++;
    } else if (char >= '0' && char <= '9') {
      numberCount++;
    } else if (specialChars.includes(char)) {
      specialCharCount++;
    }
  }

  if (upperCaseCount >= 2 && lowerCaseCount >= 2 && numberCount >= 1 && specialCharCount >= 1) {
    return true
  }
  return false
}

console.log(checkPassword(password))

/**
 * 
 * 2. Viết hàm loại bỏ các khoảng trắng thừa trong đoạn văn (Chỉ giữ lại khoảng trắng của mỗi từ)
 */

const sampleText = '   Xin     chào anh em. Học JS làm         được nhiều việc  '

const removeSpacesArray = (text) => {
  const arrayText = text.split(" ")
  for (let i = 0; i < arrayText.length; i++) {
    if (arrayText[i] === "") {
      arrayText.splice(i, 1)
      i--
    }
  } 
  return arrayText.join(" ")
}

const removeSpaces = (text) => {
  let cleanupText = ""
  for (let i=0; i<text.length; i++) {
    if (text[i] === " " && cleanupText[cleanupText.length - 1] === " ") {
      console.log("Skip cause of multi spaces")
    } else {
      cleanupText += text[i]
    }
  }
  return cleanupText.trim()
}

console.log(removeSpaces(sampleText))
