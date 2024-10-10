var upperCase = async (str) => {
  console.log("str ======= ", str);
  var newWord = "";
  newWord += str[0].toUpperCase();
  for (let x = 1; x <= str.length - 1; x++) {
    if (str[x] == " ") {
      newWord += " ";
      newWord += str[x + 1].toUpperCase();
      x++;
    } else {
      newWord += str[x];
    }
  }
  console.log("newWord ======= ", newWord);
};

upperCase("i am abcdef");
