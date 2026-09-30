var missingNumbers = (arr) => {
  console.log("array == ", arr);
  let missing = [];
  console.log("array length == ", arr.length);
  for (let i = 0, j = i + 1; i < arr.length - 1 && j <= arr.length; i++, j++) {
    let difference = arr[j] - arr[i];
    let number = arr[i] + difference;
    console.log("difference == ", difference);
    for (x = difference - 1; x > 0; x--) {
      var missingNumber = arr[i] + x;
      missing.push(missingNumber);
      arr.splice(i + 1, 0, missingNumber);
    }
    console.log("missing == ", missingNumber);
    //let latest = arr.splice(i + 1, 0, number);
    //console.log("inside for ==", latest);
  }
  console.log("arr === ", arr);
};

arr = [11, 21, 25, 29];
missingNumbers(arr);
