function bigestSumOfTwoElements(array) {
    let sum;
    var arr = [];
    arr = array.sort();
    if (arr.length===0) {
        return false;
    } else if(arr.length===1) {
        return arr[0];
    } else{
    sum = arr[arr.length-2] + arr[arr.length-1];
    return sum;
    }
}
console.log(bigestSumOfTwoElements([1, 2, 3, 4]));
console.log(bigestSumOfTwoElements([])); // => false
console.log(bigestSumOfTwoElements([76])); // => 76
console.log(bigestSumOfTwoElements([23,45,17,12])); // => 68