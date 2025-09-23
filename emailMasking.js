var hashed = " ";
var output = [];
const newParagraph = async (str) => {
  console.log("Str ==== ", str);
  var newWord = str.split(" ");
  //console.log("newWord == ", newWord);
  for (let x of newWord) {
    //console.log("x value ==== ", x);
    if (x.includes("@")) {
      var [first, last] = x.split(".");
      hashed += x[0];
      for (let i = 1; i <= first.length - 1; i++) {
        //console.log("i value === ", first[i]);
        if (first[i] === "@") {
          hashed += "@";
        }
        hashed += "X";
      }
      hashed += ".";
      hashed += last;
      output.push(hashed);
    } else {
      //hashed += x;
      output.push(x);
    }
  }
  console.log("hashed == ", output.join(" "));
};

var str =
  "Hello, My name is ritesh and my email is ritesh@gmail.com and ritesh@kork.net can you please send me some good quotes";
newParagraph(str);
//output -- "Hello, My name is ritesh and my email is rxxxxx@xxxxx.com and rxxxxx@xxxx.net can you please send me some good quotes"
