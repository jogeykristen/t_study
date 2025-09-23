var hashed = " ";
var output = [];
const newParagraph = async (str) => {
  console.log("Str ==== ", str);
  var newWord = str.split(" ");
  for (let x of newWord) {
    //console.log("x value === ",x)
    if (x.includes("@")) {
      //console.log("x inside incliudes === ",x[0])
      console.log("sploit inside === ", x.split("."));
      var [mail, end] = x.split(".");
      console.log("mail === ", mail.length, "end === ", end);
      hashed = x[0];
      for (let y = 1; y < mail.length; y++) {
        //console.log("y value === ",x[y])
        if (x[y] === "@") {
          hashed += "@";
        } else {
          hashed += "X";
        }
      }
      hashed += ".";
      hashed += end;
      output.push(hashed);
      hashed = " ";
    } else {
      output.push(x);
    }
  }
  console.log("output === ", output.join(" "));
};

var str =
  "Hello, My name is ritesh and my email is ritesh@gmail.com and ritesh@kor.ne can you please send me some good quotes";
newParagraph(str);
//output -- "Hello, My name is ritesh and my email is rxxxxx@xxxxx.com and rxxxxx@xxxx.net can you please send me some good quotes"
