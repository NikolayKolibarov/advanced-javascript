/**
 * Created by NikolayNK on 2/9/2016.
 */

function testContext() {
    console.log(this);
}

function outer() {
    function inner() {
        testContext();
    }
    inner();
}

testContext();
outer();
var context = new testContext();