var arrayAnagram = (message) => {
  var final = {};
  console.log("array ==== ", message);
  for (x of message) {
    var word = x;
    var sortedWord = x.split("").sort().join("");
    console.log(
      "sorted word ==== ",
      final[sortedWord],
      "sort === ",
      sortedWord,
    );
    if (!final[sortedWord]) {
      console.log(
        "array sorted == ",
        final[sortedWord],
        "sort == ",
        sortedWord,
        "word === ",
        word,
        "array word == ",
        [word],
      );
      final[sortedWord] = [word];
    }else{
      final[sortedWord].push(word);
    }
  }
  console.log("final ==== ", final);
};

var message = ["eat", "tea", "tan", "ate", "nat", "bat"];
arrayAnagram(message);
