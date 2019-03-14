export default function buddleSort(arrArg: IArr): IArr {
    for (let i = 0; i < arrArg.length; i ++) {
        for (let j = i + 1; j < arrArg.length; j ++) {
            if (arrArg[i] > arrArg[j]) {
                let blue = arrArg[i]
                arrArg[i] = arrArg[j]
                arrArg[j] = blue
            }
        }
    }
    return arrArg
}