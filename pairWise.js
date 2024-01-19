function pairwise(arr, arg) {
    const pairs = []
    arr.forEach(function(v, i, arr){
        let found = arr.findIndex((elt, ind) => v + elt === arg && i !== ind)
        if (found !== -1 ) {
            let check = pairs.find((elt) => found === elt[0])
            if (check === undefined) {
                pairs.push([i, found])
                console.log(i, found)
            }
        }
    })
    return arg;
}

pairwise([1,4,2,3,0,5], 7);