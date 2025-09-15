const inputArray = [0, 1, 0, 3, 2, 1, 26, 12];
const outputArray = [];
const zeroArray = [];
var final = [];

// for (let i = 0; i < inputArray.length; i++) {
//   if (inputArray[i] === 0) {
//     console.log("zero == ", inputArray[i]);
//     zeroArray.push(0);
//   } else {
//     console.log("non zero == ", inputArray[i]);
//     outputArray.push(inputArray[i]);
//   }
// }
// console.log("output array == ", [...outputArray, ...zeroArray]);
// for (let i = 0; i < zeroArray.length; i++) {
//   outputArray.push(0);
// }

// console.log(outputArray);

for (let i = 0; i < inputArray.length; i++) {
  if (inputArray[i] === 0) {
    zeroArray.push(inputArray[i]);
  }
  //console.log("zeroArray ==== ",zeroArray)
  else {
    outputArray.push(inputArray[i]);
  }
  console.log("zeroArray ==== ", zeroArray, "outputArray ====== ", outputArray);
  var output = [...zeroArray, ...outputArray];
  console.log("output ==== ", output);

  for (x of output) {
    if (!final.includes(x)) {
      final.push(x);
    }
  }
  console.log("final ===== ", final);

  for (let y = 0; y < final.length; y++) {
    for (let j = 0; j < final.length; j++) {
      if (final[j] > final[j + 1]) {
        var temp = final[j];
        final[j] = final[j + 1];
        final[j + 1] = temp;
      }
    }
  }
  console.log("after sorting ==== ", final);
}
