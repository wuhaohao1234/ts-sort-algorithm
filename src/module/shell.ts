export default function shellSort(arr: IArr) {
    let len: number = arr.length
    let temp: number
    let gap: number = 1
    while (gap < len / 3) {          
        gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (let i = gap; i < len; i++) {
            temp = arr[i]; // arr[4]
            let j
            for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}