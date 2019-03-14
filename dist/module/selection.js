"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function selectionSort(argArr) {
    let minIndex = 0;
    let temp;
    for (let i = 0; i < argArr.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < argArr.length; j++) {
            if (argArr[j] < argArr[minIndex]) {
                minIndex = j;
            }
        }
        temp = argArr[i];
        argArr[i] = argArr[minIndex];
        argArr[minIndex] = temp;
    }
    return argArr;
}
exports.default = selectionSort;
//# sourceMappingURL=selection.js.map