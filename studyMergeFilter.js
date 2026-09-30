var merger = (arr1, arr2) => {
  var final = [];
  for (x of arr2) {
    arr1.push(x);
  }
  console.log("arr1 === ", arr1);
  //   let newarr = [...arr1, ...arr2];
  //   console.log("newarr === ", newarr);

  for (y of arr1) {
    if (!final.includes(y)) {
      final.push(y);
    }
  }
  console.log("final === ", final);
  for (let i = 0; i < final.length; i++) {
    for (let j = 0; j < final.length; j++) {
      if (final[j] > final[j + 1]) {
        var temp = final[j];
        final[j] = final[j + 1];
        final[j + 1] = temp;
      }
    }
  }
  console.log("sorted final === ", final);
};

arr1 = [1, 3, 4, 5, 2, 6];
arr2 = [3, 5, 4, 2, 7];
merger(arr1, arr2);
