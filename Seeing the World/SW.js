var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["New yourk", "Europe", "Canada", "Japan"];
console.log(places);
console.log(__spreadArray([], places, true).sort());
console.log(places);
console.log(__spreadArray([], places, true).reverse());
console.log(places);
console.log(__spreadArray([], places, true).reverse, "order has changed.");
console.log([places], "back to its original order.");
places.sort();
console.log([places], "order has been changed.");
places.reverse();
console.log([places], "order has been changed.");
