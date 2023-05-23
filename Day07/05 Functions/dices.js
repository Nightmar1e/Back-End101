function throwDice() {
  // Generate random numbers between 1 and 6 for each dice
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const dice3 = Math.floor(Math.random() * 6) + 1;
  
  // Check for identical values
  if (dice1 === dice2 && dice2 === dice3) {
    return "Three identical values";
  } else if (dice1 === dice2 || dice1 === dice3 || dice2 === dice3) {
    return "Two identical values";
  } else {
    return "None of the values are identical";
  }
}

// Run the algorithm
const result = throwDice();
console.log(result);
