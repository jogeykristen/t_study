var longestSubstring = (str) => {
  console.log("str = ", str);
  var countLength = 0;
  var result = [];
  for (x of str) {
    console.log("x = ", x);
    if (result.includes(x)) {
      var currentLength = result.length;
      result = [];
      console.log("currentLength = ", currentLength);
      if (currentLength > countLength) {
        countLength = currentLength;
        console.log("countLength = ", countLength);
      }
    }
    result.push(x);
    console.log("result = ", result.join(""));
  }
  console.log("count = ", countLength);
};

var elements = ["a", "b", "a", "c", "b", "c"];
longestSubstring("hello");
