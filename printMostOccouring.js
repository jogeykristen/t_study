var TopWords = async (arr) => {
  var checkCount = {};

  for (let x of arr) {
    // split sentence into words
    let splitValue = x.split(" ");
    for (let i of splitValue) {
      // normalize word
      let word = i.toLowerCase().replace(/[^a-z]/g, "");
      if (word.length === 0) continue;

      if (!checkCount[word]) {
        checkCount[word] = 0;
      }
      checkCount[word]++;
    }
  }

  // Convert object to array of [word, count]
  let wordCounts = [];
  for (let word in checkCount) {
    wordCounts.push([word, checkCount[word]]);
  }
  console.log("wordCount === ", wordCounts);

  // Simple bubble sort by count (descending)
  for (let i = 0; i < wordCounts.length - 1; i++) {
    for (let j = i + 1; j < wordCounts.length; j++) {
      if (wordCounts[i][1] < wordCounts[j][1]) {
        let temp = wordCounts[i];
        wordCounts[i] = wordCounts[j];
        wordCounts[j] = temp;
      }
    }
  }

  // Print top 3
  console.log("Top 3 words:", wordCounts);
  for (let k = 0; k < 3 && k < wordCounts.length; k++) {
    console.log(wordCounts[k][0], "=>", wordCounts[k][1]);
  }
};

var arr = [
  "I will reach there by tomorrow morning",
  "Today is such a nice weather, how about we do an outing?",
  "Hey there, I tried calling you but nobody picked up. Can you call me back when you see this message?",
  "No that won't work, I had already tried that earlier.",
];

TopWords(arr);
