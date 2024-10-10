var sorting = async (arr) => {
  console.log("arr ======== ", arr);
  let output = [];
  for (let x = 0; x <= arr.length - 1; x++) {
    for (let j = 0; j <= arr.length - 1 - x; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("Arr ==== ", arr);
  for (let y = 0; y <= arr.length - 1; y++) {
    if (!output.includes(arr[y])) {
      output.push(arr[y]);
    }
  }
  console.log("output ======== ", output);
};
let arr = [2, 4, 3, 7, 8, 5, 4, 1];
sorting(arr);
