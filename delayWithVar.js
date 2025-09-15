for (var i = 1; i < 5; i++) {
  (function (num) {
    setTimeout(() => {
      console.log("delay 2 sec === ", num);
    }, num * 2000);
  })(i);
}

// for (let i = 1; i < 5; i++) {
//   setTimeout(() => {
//     console.log("delay 2 sec === ", i);
//   }, i * 2000);
// }
