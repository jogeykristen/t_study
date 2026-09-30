// var upperCase = async (str) => {
//   console.log("str ======= ", str);
//   var newWord = "";
//   newWord += str[0].toUpperCase();
//   for (let x = 1; x <= str.length - 1; x++) {
//     if (str[x] == " ") {
//       newWord += " ";
//       newWord += str[x + 1].toUpperCase();
//       x++;
//     } else {
//       newWord += str[x];
//     }
//   }
//   console.log("newWord ======= ", newWord);
// };

var upperCase = (str) => {
  console.log("str === ", str);
  console.log("split === ", str.split(" "));
  var final = "";
  var newsplit = str.split(" ");
  for (x of newsplit) {
    var latest = x.split("");
    console.log("latest == ", latest);
    latest[0] = latest[0].toUpperCase();
    final += latest.join("") + " ";
  }
  console.log("latest === ", final);
};

upperCase("i am abcdef");
