function selectionSort(array) {
  // Only change code below this line
  let tempArr, min, minIndex, temp;
  for(let i = 0; i < array.length; i++) {
    tempArr = array.filter((value, index) => index > i);
    min = Math.min(...tempArr);
    minIndex = tempArr.findIndex(e => e === min);
    if (array[i] > min) {
      temp = array[i];
      array[i] = min;
      array[ i + minIndex + 1] = temp;
    }
  }
  console.log(array);
  return array;
  // Only change code above this line
}

selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])