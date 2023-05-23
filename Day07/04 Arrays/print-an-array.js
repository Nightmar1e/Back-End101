const array = [1, 2, 3, 4, 5];

printArray(array);

function printArray(array) {
  let currentIndex = 0;
  while (currentIndex < array.length) {
    console.log(array[currentIndex]);
    currentIndex++;
  }
}
