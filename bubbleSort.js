function bubbleSort(array) {
  // Only change code below this line
  let isSorted = false;
  let temp = 0;
  while (!isSorted) {
    isSorted = true;
    for(let i = 0; i < array.length-1; i++) {

      if(array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSorted = false;
      }

    }
  }
  console.log(array);
  return array;
  // Only change code above this line
}

Waiting: bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])