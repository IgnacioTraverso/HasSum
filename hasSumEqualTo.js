// Given a function receiving an array of integers and an integer, return if there is a couple of elements in the array which sum is equal
// to the number given

// hasSumEqualTo([1,3,4,6], 9) // => true
// hasSumEqualTo([1,3,4,6], 8) // => false

// 1. Do it
// 2. Refactor legibility. Your code is going to be share with multiple developers, increase its legibility.
// 3. Refactor performance. The benchmark of your code at scale doesn't fit the business requirements. Please, update your code to be lower than O(n²)
//   a. Supposing a not ordered input
//   b. Supposing an ordered input


function hasSumEqualTo(array, num) {

    var idx1 = 0
    var idx2 = array.length - 1

    while (idx1 < idx2) {

        if (array[idx1] + array[idx2] == num) {
            return true;
        } else if (array[idx1] + array[idx2] > num) {
            idx2--;
        } else {
            idx1++;
        }

    }
    return false;

}

console.log(hasSumEqualTo([1,3,4,6],8))