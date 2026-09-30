var substr = (str) => {
  var characters = [];
  var count = 0;
  var temp = 0;
  var latestString = "";
  console.log("str === ", str);
  for (x of str) {
    if (characters.includes(x)) {
      temp = characters.length;
      console.log("length === ", temp);
      if (temp > count) {
        count = temp;
        latestString = characters.join("");
        console.log("latest string -===== ", latestString);
      }
      characters = [];
      characters.push(x);
    } else {
      characters.push(x);
    }
  }
  console.log("count === ", count, "lateststring === ", latestString);
};

var str = "pwwkew";
substr(str);
