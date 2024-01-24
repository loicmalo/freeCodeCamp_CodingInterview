function pairwise(arr, arg) {
  let resultArray = [];

  arr.forEach((e, i, array) => {
    array.forEach((ePair, iPair) => {
      if(e + ePair === arg && i !== iPair) {
        if(!(resultArray.includes(i) || resultArray.includes(iPair))) {
          resultArray.push(i);
          resultArray.push(iPair);
        }

      }
    })
  })
  arg = resultArray.reduce((acc, curr) => acc + curr,0,)
  console.log(resultArray);
  return arg;
}

pairwise([1,4,2,3,0,5], 7);