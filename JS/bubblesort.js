const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});






function absurdBubbleSort(arr, sortCompletionCallback) {


  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);

} 


function askifGreaterThan(el1, el2, callback) {
  rl.question(` Is ${el1} greater than ${el2} ? `, (answer) => {
    console.log(answer);
    if (answer === "yes") {
      callback(true);
    }
    else if (answer === "no") {
      callback(false);
    }
    else {
      console.log("Answer must be yes or no");
    }
  });

}

// askifGreaterThan(4, 5, ans => {
//   if (ans === true) {
//     console.log("true");
//   }
//   else {
//     console.log("false");
//   }
// });
 
function innerBubbleSortLoop(arr, i , madeAnySwaps, outerBubbleSortLoop) {
  console.log(madeAnySwaps);
  if ( i < arr.length - 1) {
    askifGreaterThan(arr[i], arr[i+1], arg => {
      if (arg === true) {
        [arr[i],arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, ++i, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  else if (i === arr.length - 1 ) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

// innerBubbleSortLoop([3,8,5,2,8], 0, false, ele => {
//   console.log("in the outer bubble");
// });

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  rl.close();
});