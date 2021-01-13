/**
 * Counting sort by digit
 *
 * @param {Array<number>} array
 * @param {number} exponent
 * @returns {Array<number>}
 */
var countingSort = function (array, exponent) {
    var bucketIndex;
    var buckets = [];
    var output = [];
    // Initialize bucket
    for (var i = 0; i < 10; i++) {
        buckets[i] = 0;
    }
    // Count frequencies per bucket
    for (var i = 0; i < array.length; i++) {
        bucketIndex = Math.floor(((array[i]) / exponent) % 10);
        buckets[bucketIndex]++;
    }
    // Modify the count array such that each element at each index
    // stores the sum of previous counts.
    for (var i = 1; i < 10; i++) {
        buckets[i] += buckets[i - 1];
    }
    // Output each object from the input sequence followed by
    // decreasing its count by 1
    for (var i = array.length - 1; i >= 0; i--) {
        bucketIndex = Math.floor(((array[i]) / exponent) % 10);
        output[--buckets[bucketIndex]] = array[i];
    }
    return output;
};
/**
 * Radix Sort
 *
 * @param {Array<number>} array
 * @returns {Array<number>}
 */
var radixSordLSD = function (array) {
    if (array.length === 0) {
        return array;
    }
    var maxValue = Math.max.apply(Math, array);
    // Perform counting sort on each exponent/digit
    var exponent = 1;
    while ((maxValue) / exponent >= 1) {
        array = countingSort(array, exponent);
        exponent *= 10;
    }
    return array;
};
