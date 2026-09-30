var numPalindrome = (num) => {
  var original = num;
  var reversed = 0;
  while (original > 0) {
    value = original % 10;
    console.log(value);

    reversed = reversed * 10 + value;

    original = (original - value) / 10;
    console.log("after division === ", original);
  }
  if (reversed === num) {
    console.log(num + " is a palindrome");
  } else {
    console.log(num + " is not a palindrome");
  }
};

numPalindrome(4334);
