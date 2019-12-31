    const makeNumber = (str) => {
    let stringOfNumbers = '';
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < str.length; i++) {
        if (~numbers.indexOf(+str[i])) {
            stringOfNumbers += str[i];
        }
    }

    return stringOfNumbers;
};

makeNumber('dfd2234dfwdd42');