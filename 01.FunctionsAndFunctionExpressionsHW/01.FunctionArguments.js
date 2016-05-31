/**
 * Created by NikolayNK on 2/9/2016.
 */

function printArgsInfo() {
    if (arguments.length === 0) {
        console.log('No passed arguments.');
    }

    for (var i = 0; i < arguments.length; i++) {
        var argType = typeof (arguments[i]);
            if (Array.isArray(arguments[i])) {
                argType = "array"
            }
        console.log(arguments[i] + ' (' +  argType + ')');
    }
}

console.log('First problem:');
printArgsInfo(2, 3, 2.5, -110.5564, false);
printArgsInfo(null, undefined, "", 0, [], {});
printArgsInfo([1, 2], ["string", "array"], ["single value"]);
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);

console.log('Second problem:');
printArgsInfo.call(null);
printArgsInfo.call(printArgsInfo, 12, 'asd');
printArgsInfo.apply(null);
printArgsInfo.apply(printArgsInfo, [[12, 'asd']]);

