//Longest Repeating Character substring
//Eg: aaabbccccd

var longestCharacter = async (str) => {
  console.log("string value === ", str);
  var count = 0;
  var temp = 0;
  var string = "";
  var charCount = {};
  for (let x of str) {
    //console.log("x value === ",x)
    if (!charCount[x]) {
      charCount[x] = 0;
    }
    charCount[x]++;
  }
  console.log("charCount === ", charCount);
  for (let y in charCount) {
    //console.log("char == ",y,"count === ",charCount[y])

    if (charCount[y] > temp) {
      //console.log("charCount === ",charCount[y],"temp value ==== ",temp)
      temp = charCount[y];
      //console.log("temp2 value ==== ",temp)
      var character = y;
    }
  }
  console.log("temp === ", temp, "character ==== ", character);
  for (let i = 1; i <= temp; i++) {
    string += character;
  }
  console.log("final Sting:", string);
};

var str = "aaabbccccd";
longestCharacter(str);
