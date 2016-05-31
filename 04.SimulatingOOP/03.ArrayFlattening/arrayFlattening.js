/**
 * Created by NikolayNK on 16.2.2016 г..
 */

Array.prototype.flatten = function () {
    var resultArray = [];

    function getValues(array) {
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                getValues(array[i]);
            } else {
                resultArray.push(array[i]);
            }
        }
    }

    getValues(this);
    return resultArray
};




var array = [1, 2, [3, 4], [5, 6]];
var flattenedArray = array.flatten();
console.log(flattenedArray);