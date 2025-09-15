var numPalindrome = (num) => {
  let original = num;
  let reversed = 0;

  while (num > 0) {
    digit = num % 10;
    console.log("digit === ", digit);
    reversed = reversed * 10 + digit;

    console.log("reversed ==== ", reversed);

    num = (num - digit) / 10;
    console.log("num ===== ", num);
  }
  if (reversed === original) {
    console.log("palindrome");
    return "palindrome";
  } else {
    console.log("not palindrome");
    return "not palindrome";
  }
};

numPalindrome(4334);
