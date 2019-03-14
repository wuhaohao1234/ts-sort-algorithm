"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buddleSort(arrArg) {
    for (let i = 0; i < arrArg.length; i++) {
        for (let j = i + 1; j < arrArg.length; j++) {
            if (arrArg[i] > arrArg[j]) {
                let blue = arrArg[i];
                arrArg[i] = arrArg[j];
                arrArg[j] = blue;
            }
        }
    }
    return arrArg;
}
exports.default = buddleSort;
//# sourceMappingURL=bubble.js.map