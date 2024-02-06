function insertionSort(array) {
  // Only change code below this line
  let  insert, j;
  for(let i = 0; i < array.length; i++) {
    insert = array[i];
    j= i - 1;
    while(j >= 0) {
      if (insert >= array[j] || j === 0) {
        for(let k = i; k > j; k--) {
          array[k] = array[k - 1]
        }
        insert < array[j] ? array[j] = insert : array[j + 1] = insert ;
        j=0
      }
      j--;
    }
  }
  return array;
  // Only change code above this line
}

insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
insertionSort([5, 4, 33, 2, 8]);