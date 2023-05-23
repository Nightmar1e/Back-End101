const array = [1,8,17,29];

window.alert(isSortedAscending(array));

function isSortedAscending(array) {
    let currentIndex = 0;
    while (currentIndex < array.length - 1) {
        if (array[currentIndex] > array[currentIndex + 1]) {
            return false;
        }
        currentIndex++;
    }
    return true;
    
}


//const array = [1, 2, 3, 4, 5];
//
//isSortedAscending(array);
//
//function isSortedAscending(array) {
//  let currentIndex = 0;
//  while (currentIndex < array.length - 1) {
//    if (array[currentIndex] > array[currentIndex + 1]) {
//      return false;
//    }
//    currentIndex++;
//  }
//  return true;
//}
