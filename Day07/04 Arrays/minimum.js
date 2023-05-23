const array = [11, 25, 73, 4, 5];

printMinimum(array);

function printMinimum(array) {
  let minimum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    }
  }
  console.log(minimum);
}
