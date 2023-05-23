const array = [11, 25, 73, 4, 5];

printMaximum(array);

function printMaximum(array) {
  let maximum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximum) {
      maximum = array[i];
    }
  }
  console.log(maximum);
}
