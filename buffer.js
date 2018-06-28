//Dữ liệu khi truyền tải từ client lên server hoặc ngược lại sẽ được truyền dưới dạng Buffer
//Bất kỳ đối tượng nào như văn bản, hình ảnh, âm thanh, ... cũng có thể chuyển thành buffer
var buffer = new Buffer("Hello", "utf-8"); //Hello là đối tượng cần chuyển thành buffer
console.log(buffer);
console.log(buffer.toString());// chuyển buffer thành chuỗi
console.log(buffer.toJSON());// chuyển buffer thành JSON