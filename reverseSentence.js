//const rever =(str)=>{
//console.log("str == ",str)
//var reverseWord = "";
//for(i=str.length -1;i>=0;i--){
//  reverseWord += str[i]
//}
//console.log("reverseWord == ",reverseWord)
//}

const rever = (str) => {
  let reverse = [];
  var reverseWord = "";
  let punctuation = "";
  console.log("str == ", str);
  let wordSplit = str.split(" ");
  console.log("wordsplit == ", wordSplit);
  for (let word of wordSplit) {
    //console.log("split == ",word)
    for (let i = word.length - 1; i >= 0; i--) {
      //console.log("word == ",word[i])
      if (word[i] == "?" || word[i] == ",") {
        punctuation += word[i];
      } else {
        reverseWord += word[i];
      }
    }
    console.log("reverse before === ", reverseWord);
    //reverseWord += punctuation
    reverse.push(reverseWord + punctuation);
    console.log("reverse after == ", reverseWord);
    punctuation = "";
    reverseWord = "";
  }
  console.log("final === ", reverse.join(" "));
};
const str = "hello, how are you?";
rever(str);
