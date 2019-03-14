"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function insertionSort(argArr) {
    let preIndex;
    let current;
    for (let i = 1; i < argArr.length; i++) {
        preIndex = i - 1;
        current = argArr[i];
        while (preIndex >= 0 && argArr[preIndex] > current) {
            argArr[preIndex + 1] = argArr[preIndex];
            preIndex--;
        }
        argArr[preIndex + 1] = current;
    }
    return argArr;
}
exports.default = insertionSort;
//# sourceMappingURL=insertion.js.map