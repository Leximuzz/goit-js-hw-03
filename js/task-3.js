function filterArray(numbers, value) {
    const quantityElements = numbers.length;
    // console.log(quantityElements)
    for (let i = 0; i <= quantityElements; i++){
        if (i > value) {
            console.log(i)
           let maxArr = maxArr.push(numbers[i]);
            console.log(numbers[i])
      } 
    }
    return maxArr;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]