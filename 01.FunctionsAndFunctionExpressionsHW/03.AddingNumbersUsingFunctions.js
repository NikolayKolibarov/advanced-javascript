/**
 * Created by NikolayNK on 2/9/2016.
 */

var add = function(){
    var sum = 0;
    function inner(increment) {
        sum+= increment;
        return add;
    }

    inner.toString = function() {
        return sum;
    }

    return inner;
}();

var addNumbers = add(3)(5)(2)(2);
console.log(addNumbers.toString());
console.log(addNumbers(5)(5).toString());
