const { result } = require("lodash");

var substr = (str) => {
  var count = 0;
  var resut = [];
  console.log("str = ", str);
  for (x of str) {
    if (resut.includes(x)) {
      var temp = resut.length;
      console.log("temp = ", temp);
      if (temp > count) {
        count = temp;
        var arr = resut;
      }
      resut = [];
    }
    resut.push(x);
  }
  console.log("arr = ", arr.join(""), "count  = ", count);
};

var str = "pwwkew";
substr(str);
