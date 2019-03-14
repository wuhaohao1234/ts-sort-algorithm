export default function insertionSort(argArr: IArr): IArr {
    let preIndex: number
    let current: number
    for (let i = 1; i < argArr.length; i ++) {
        preIndex = i - 1 // 0
        current = argArr[i] // 1
        while (preIndex >= 0 && argArr[preIndex] > current) {
            argArr[preIndex + 1] = argArr[preIndex]
            preIndex --
        }
        argArr[preIndex + 1] = current
    }
    return argArr
}