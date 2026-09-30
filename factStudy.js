var factorial = (num) => {
  var sum = 1;
  var fac = "";
  for (let x = 1; x <= num; x++) {
    if (x == num) {
      fac += x;
    } else {
      fac += x + "*";
    }
    sum = sum * x;
  }
  console.log("factorial = " + fac + " = " + sum);
};
num = 5;
factorial(num);
