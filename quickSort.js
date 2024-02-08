function quickSort(array) {
  // Only change code below this line
  function swap(a, b, arr) {
    if(a < arr.length && b < arr.length) {
      let tmp = arr[a];
      arr[a] = arr[b];
      arr[b] = tmp;
    }
  }

  function partition(arr, first, last) {
      let pivot = arr[last];
      let i = first - 1;
      
      for (let j = first; j <= last - 1; j++) {
        if(arr[j] <= pivot) {
          i++;
          swap(i, j, arr);
        }
      }
      i++;
      swap(last, i, arr)
      return i
  }
  
  function sort(arr, first, last) {
    if(!(first >= last || first < 0)) {
      let i = partition(arr, first, last);
      sort(arr, first, i - 1);
      sort(arr, i + 1, last);
    }
  }

  sort(array, 0, array.length - 1);
  return array;
  // Only change code above this line
}

quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])