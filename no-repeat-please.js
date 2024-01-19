
function permAlone(str) {

  function findPermutations(char, arr) {

    var ch = char;
    var source = arr;     // Current sub-permutation
    var temp, dest = [];

    for (var i = 0; i <= source.length; ++i) {
      temp = source.slice(0);         // Copy the array
      temp.splice(i, 0, ch);          // Insert the new character
      dest.push(temp);                // Store the new sub-permutation
    }
    return dest
  }

  const arr = str.split('');
  let permutations = [];
  let i =  0
  while (i < arr.length) {
    if (i === 0) permutations = findPermutations(arr[i],permutations)
    else {
      let temp = [];
      permutations.forEach(function(v) {
        temp = temp.concat(findPermutations(arr[i],v));
      })
      permutations = [...temp];
    }
    i++;
  }
    
  //console.log(permutations)
  let char = '';
  let counter = 0;
  permutations.forEach(function(v){
    char = v[0];
    for(let i = 1; i < v.length; i++) {
      if(char === v[i]) {
        counter++;
        break;
      } else {
        char = v[i];
      }
    }
  })
  return permutations.length - counter;
}

console.log(permAlone('aab'))
