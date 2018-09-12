export const sum = (...a: number[]) =>
    a.reduce((acc, val) => acc + val, 0);

    console.log(sum(2,3,4))