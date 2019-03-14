export default function selectionSort(argArr: IArr): IArr {
    let minIndex = 0
    let temp: number
    for (let i = 0; i < argArr.length - 1; i ++) {
        minIndex = i
        for (let j = i + 1; j < argArr.length; j ++) {
            if (argArr[j] < argArr[minIndex]) {
                minIndex = j
            }
        }
        temp = argArr[i]
        argArr[i] = argArr[minIndex]
        argArr[minIndex] = temp
    }
    return argArr
}