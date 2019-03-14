interface IArr {
    [index: number]: number;
    length: number;
    slice: (num: number, nums?: number) => IArr;
    push: (num: number) => any;
    shift: () => any;
}
