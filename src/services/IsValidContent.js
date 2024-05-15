function IsValidContent(text) {
    // Biểu thức chính quy để kiểm tra mẫu liên kết
    const linkRegex = /(http|https):\/\/[^\s]+/gi;

    // Biểu thức chính quy để kiểm tra từ tục tỉu
    const obsceneWords = ['tục', 'tỉu', 'lờ', 'đụ', 'cc', 'đm', 'đmm', 'duma'];
    const obsceneRegex = new RegExp(obsceneWords.join('|'), 'gi');

    if (obsceneRegex.test(text)) return false; //invalid
    if (linkRegex.test(text)) return false; //invalid
    return true; //valid
}

export default IsValidContent;
