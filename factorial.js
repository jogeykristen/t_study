const fact = (num) => {
  try {
    console.log("num ==== ", num);
    var sum = 1;
    for (x = 1; x <= num; x++) {
      sum = sum * x;
    }
    return console.log("sum ==== ", sum);
  } catch {
    console.log("error ==== ", console);
  }
};

fact(1);
