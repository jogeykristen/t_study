var newParagraph = (str) => {
  console.log("str === ", str);
  var final = "";
  var finalstr = [];
  var lateststr = str.split(" ");
  for (let x of lateststr) {
    //console.log("x value ==== ", x);
    if (x.includes("@")) {
      final += x[0];
      console.log("final first ===", final);
      //console.log("@value === ", x);
      var [email, end] = x.split(".");
      for (let y = 1; y <= email.length; y++) {
        //console.log("y value === ", y, "value ==== ", email[y]);
        //console.log("email == ", email, "end === ", end);

        if (x == "@") {
          final += "@";
        } else {
          final += "X";
        }
      }
      final += ".";
      final += end;
      finalstr.push(final);
      final = "";
    } else {
      finalstr.push(x);
    }
  }
  console.log("final string == ", finalstr.join(" "));
};

var str =
  "Hello, My name is ritesh and my email is ritesh@gmail.com and ritesh@kor.net can you please send me some good quotes";
newParagraph(str);
