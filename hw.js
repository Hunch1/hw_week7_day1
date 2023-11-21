//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords() {
      // Loop through each dog name
  for (let i = 0; i < dog_names.length; i++) {
    // Check if the current name is in the dog string
    // "The includes() method of Array instances determines whether an array includes a certain 
    // value among its entries, returning true or false as appropriate."
    if (dog_string.includes(dog_names[i])) {
      console.log(`Matched ${dog_names[i]}`);
    } else {
      console.log(`No Match ${dog_names[i]}`);
    }
  }
}

findWords();
//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// define array
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    // for loop that iterates through the array that only considers even indices
    for (let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, "even index");
        // i: index start
        // 1 number of elements to remove
        // "even index" string that is being added to index
        // made notes for myself
      }
    }

// Call the function
replaceEvens(arr);

console.log(arr);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]




// code wars probelms

// DESCRIPTION: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

  console.log(checkEvenOrOdd(7))
  console.log(checkEvenOrOdd(60))




//   DESCRIPTION:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(number) {
    if (number > 0) {
      return -number; 
    } else {
      return number;
    }
  }

  console.log(makeNegative(105))
  console.log(makeNegative(-105))