const array = [11, 25, 73, 4, 5];

printMinimumPosition(array);

function printMinimumPosition(array) {
  let minimum = array[0];
  let position = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
      position = i;
    }
  }
  console.log(position);
}
