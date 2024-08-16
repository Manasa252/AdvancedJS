// arrays, objects, strings, function arguments
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// concat arrays
var arr1 = [10, 20];
var arr2 = [30, 40];
var arr3 = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log(arr3);
// cloning arrays
var arr4 = [10, 20];
var arr5 = __spreadArray([], arr4, true);
console.log(arr4 === arr5);
