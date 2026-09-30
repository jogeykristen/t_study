var longestCharacter = (str) => {
  console.log("str === ", str);
  var temp = 0;
  var character = "";
  var finalString = "";
  var charCount = {};
  for (x of str) {
    if (!charCount[x]) {
      charCount[x] = 0;
    }
    charCount[x]++;
  }
  console.log("charCount === ", charCount);
  for (y in charCount) {
    console.log("array value == ", charCount[y], "y value == ", y);
    if (charCount[y] > temp) {
      temp = charCount[y];
      character = y;
    }
  }
  for (i = 0; i < temp; i++) {
    finalString += character;
  }
  console.log("temp == ", temp, "finalString === ", finalString);
};

var str = "aaabbccccd";
longestCharacter(str);
