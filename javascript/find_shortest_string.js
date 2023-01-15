function findShortestString(arr) {

  // create a variable to store an index of the shortest value
  let shortestInx = 0;

  // iterate through the array
  for (let i = 0; i < arr.length; i++) {

    // if current value length is less than the length of arr[shortestInx]
    if (arr[i].length < arr[shortestInx].length) {

      // reassign the shortestInx to the index of current value
      shortestInx = i;
    }
  }

  // return shortest element
  return arr[shortestInx];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
