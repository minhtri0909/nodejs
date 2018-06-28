var fs = require("fs"); //require module fs để nodejs có thể đọc file
var noidung = fs.readFileSync(__dirname + "/test.txt");
console.log(noidung.toString());