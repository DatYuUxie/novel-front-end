function IsValidContent(text) {
    // Biểu thức chính quy để kiểm tra mẫu liên kết
    const linkRegex = /(http|https):\/\/[^\s]+/gi;

    // Biểu thức chính quy để kiểm tra từ tục tỉu
    const obsceneWords = ['tục', 'tỉu', 'lờ', 'đụ', 'cc', 'đm', 'đmm', 'duma'];
    // const obsceneWords = ['tục duma'];

    const obsceneRegex = new RegExp(obsceneWords.join('|'), 'gi');

    if (obsceneRegex.test(text)) return 1; //invalid
    if (linkRegex.test(text)) return 2; //invalid
    return 0; //valid
}

export default IsValidContent;
