function bigestSumOfTwoElements(array){
    if(array.length === 0 ){
        return false;
    }
    if (array.length === 1 ){
        return array[0];
    }
    let max1 = array[0];
    let max2 = array[1];

    array.forEach(num =>{
        if (num > max1){
            max2 = max1;
            max1 = num;
        }
    });
    
    return max1 + max2;
}

console.log(bigestSumOfTwoElements([1,2,3,4])) // => 7
console.log(bigestSumOfTwoElements([])) // => false
console.log(bigestSumOfTwoElements([76])) // => 76
console.log(bigestSumOfTwoElements([23,45,17,12])) // => 68