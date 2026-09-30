var anagram = (word1, word2) => {
  charCount1 = {};
  charCount2 = {};
  for (x of word1) {
    if (!charCount1[x]) {
      charCount1[x] = 0;
    }
    charCount1[x]++;
  }
  for (y of word2) {
    if (!charCount2[y]) {
      charCount2[y] = 0;
    }
    charCount2[y]++;
  }
  console.log("charcount 1 ===", charCount1, "char count 2 == ", charCount2);
  for (j in charCount1) {
    if (charCount1[j] == charCount2[j]) {
      console.log("anagram");
      return "yes anagram";
    }
    console.log("not anagram");
    return "no anagram";
  }
};

result = anagram("listen", "silent");
console.log(result);
