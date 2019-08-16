const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



// function addNum(){
//   args = Array.from(arguments);
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//     console.log(sum);
//   }
//   return sum;
// }


function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0){
    rl.question("What is your number? ", (answer) => {
      let ans = parseInt(answer);
      sum += ans;
      console.log(sum);
      addNumbers(sum, --numsLeft, completionCallback);

    });
    
  }
  else {
    completionCallback(sum);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// function test(){
//   let sum = 0;
//   // for (let i = 0; i < 5; i++){
//   //   rl.question("pick number", (answer) => {
//   //       sum += parseInt(answer);
//   //       console.log(sum);
//   //   });
//   // }
//   rl.question("num1", (ans) => {
//     rl.question("num2", (ans2) => {
//       console.log(num1+num2);
//     })
//   })
//   // rl.close();
//   // console.log("total sum is " + sum);
//   // return sum;
// }
// test();