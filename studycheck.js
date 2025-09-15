var check = async (arr) => {
  var string = [];
  var number = [];
  var reversed = [];
  for (x of arr) {
    if (typeof x === "string") {
      string.push(x);
    } else {
      number.push(x);
    }
  }
  console.log("string === ", string, "number === ", number);
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  console.log("reversed ==== ", reversed);
};

var arr = [1, "hi", "hello", 3];
check(arr);
